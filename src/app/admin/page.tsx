"use client";

import { useState, useEffect } from 'react';
import { products } from '@/lib/products';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Input, Textarea, Select } from '@/components/ui/Form';
import { cn } from '@/lib/utils';

interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  sizes: string[];
  description: string;
  materials: string[];
  features: string[];
  fit: string;
  isNew?: boolean;
  isFeatured?: boolean;
  stock: Record<string, number>;
  createdAt: string;
}

export function AdminPage() {
  const [adminProducts, setAdminProducts] = useState<Product[]>(products);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    id: '',
    slug: '',
    name: '',
    price: '',
    originalPrice: '',
    images: ['', '', ''],
    category: 'tshirt',
    sizes: 'S,M,L,XL,XXL',
    description: '',
    materials: '',
    features: '',
    fit: 'oversized',
    isNew: false,
    isFeatured: false,
    stock: '{"S":10,"M":20,"L":25,"XL":15,"XXL":5}',
    createdAt: new Date().toISOString().split('T')[0],
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (name === 'isNew' || name === 'isFeatured') {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };
  
  const handleAddProduct = () => {
    setEditingProduct(null);
    setFormData({
      id: '',
      slug: '',
      name: '',
      price: '',
      originalPrice: '',
      images: ['', '', ''],
      category: 'tshirt',
      sizes: 'S,M,L,XL,XXL',
      description: '',
      materials: '',
      features: '',
      fit: 'oversized',
      isNew: false,
      isFeatured: false,
      stock: '{"S":10,"M":20,"L":25,"XL":15,"XXL":5}',
      createdAt: new Date().toISOString().split('T')[0],
    });
    setShowForm(true);
    setError('');
  };
  
  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price.toString(),
      originalPrice: product.originalPrice?.toString() || '',
      images: [...product.images],
      category: product.category,
      sizes: product.sizes.join(','),
      description: product.description,
      materials: product.materials.join('\n'),
      features: product.features.join('\n'),
      fit: product.fit,
      isNew: product.isNew || false,
      isFeatured: product.isFeatured || false,
      stock: JSON.stringify(product.stock, null, 2),
      createdAt: product.createdAt,
    });
    setShowForm(true);
    setError('');
  };
  
  const handleDeleteProduct = (id: string) => {
    if (confirm('Yakin ingin menghapus produk ini?')) {
      setAdminProducts(prev => prev.filter(p => p.id !== id));
      setSuccess('Produk berhasil dihapus');
      setTimeout(() => setSuccess(''), 3000);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const stock = JSON.parse(formData.stock);
      const newProduct: Product = {
        id: formData.id || `prod-${Date.now()}`,
        slug: formData.slug || formData.name.toLowerCase().replace(/\s+/g, '-'),
        name: formData.name,
        price: parseInt(formData.price),
        originalPrice: formData.originalPrice ? parseInt(formData.originalPrice) : undefined,
        images: formData.images.filter(img => img.trim()),
        category: formData.category as any,
        sizes: formData.sizes.split(',').map(s => s.trim()).filter(Boolean),
        description: formData.description,
        materials: formData.materials.split('\n').map(m => m.trim()).filter(Boolean),
        features: formData.features.split('\n').map(f => f.trim()).filter(Boolean),
        fit: formData.fit as any,
        isNew: formData.isNew,
        isFeatured: formData.isFeatured,
        stock,
        createdAt: formData.createdAt,
      };
      
      if (editingProduct) {
        setAdminProducts(prev => prev.map(p => p.id === editingProduct.id ? newProduct : p));
        setSuccess('Produk berhasil diperbarui');
      } else {
        setAdminProducts(prev => [...prev, newProduct]);
        setSuccess('Produk berhasil ditambahkan');
      }
      
      setShowForm(false);
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Format JSON stok tidak valid. Contoh: {"S":10,"M":20}');
    }
  };
  
  const handleCancel = () => {
    setShowForm(false);
    setEditingProduct(null);
    setError('');
  };
  
  const handleImageChange = (index: number, value: string) => {
    const newImages = [...formData.images];
    newImages[index] = value;
    setFormData(prev => ({ ...prev, images: newImages }));
  };
  
  return (
    <div className="min-h-screen py-8 lg:py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-black text-white">Admin Panel</h1>
            <p className="text-neutral-400 mt-1">Kelola produk HALT.CO</p>
          </div>
          <Button onClick={handleAddProduct} size="lg">
            + Tambah Produk
          </Button>
        </div>
        
        {success && (
          <div className="mb-6 p-4 bg-green-900/30 border border-green-700 rounded-xl text-green-300">
            {success}
          </div>
        )}
        
        {error && (
          <div className="mb-6 p-4 bg-red-900/30 border border-red-700 rounded-xl text-red-300">
            {error}
          </div>
        )}
        
        {/* Products Table */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-neutral-900 border-b border-neutral-800">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-400 uppercase tracking-wider">Produk</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-400 uppercase tracking-wider">Kategori</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-400 uppercase tracking-wider">Harga</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-400 uppercase tracking-wider">Stok</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-400 uppercase tracking-wider">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800">
                {adminProducts.map(product => (
                  <tr key={product.id} className="hover:bg-neutral-900/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-neutral-800 flex-shrink-0">
                          <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="font-medium text-white">{product.name}</p>
                          <p className="text-sm text-neutral-500">ID: {product.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-neutral-800 text-neutral-300 capitalize">{product.category}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-semibold text-white">{formatPrice(product.price)}</p>
                        {product.originalPrice && (
                          <p className="text-sm text-neutral-500 line-through">{formatPrice(product.originalPrice)}</p>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-neutral-300">
                        Total: {Object.values(product.stock).reduce((a, b) => a + b, 0)}
                      </p>
                      <p className="text-xs text-neutral-500">
                        {Object.entries(product.stock).map(([k, v]) => `${k}:${v}`).join(', ')}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {product.isNew && <span className="px-2 py-0.5 text-xs font-bold text-white bg-[#C0392B] rounded">NEW</span>}
                        {product.isFeatured && <span className="px-2 py-0.5 text-xs font-bold text-black bg-white rounded">FEATURED</span>}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" onClick={() => handleEditProduct(product)}>
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleDeleteProduct(product.id)} className="text-red-400 hover:text-red-300 hover:bg-red-900/20">
                          Hapus
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {adminProducts.length === 0 && (
            <div className="p-12 text-center">
              <p className="text-neutral-400">Belum ada produk. Klik "Tambah Produk" untuk memulai.</p>
            </div>
          )}
        </div>
        
        {/* Product Form Modal */}
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl">
              <div className="p-6 border-b border-neutral-800 flex items-center justify-between sticky top-0 bg-neutral-950 rounded-t-2xl">
                <h2 className="text-xl font-bold text-white">{editingProduct ? 'Edit Produk' : 'Tambah Produk Baru'}</h2>
                <button onClick={handleCancel} className="p-2 text-neutral-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Basic Info */}
                <div className="grid lg:grid-cols-2 gap-6">
                  <Input
                    label="Slug (URL) *"
                    name="slug"
                    value={formData.slug}
                    onChange={handleInputChange}
                    placeholder="prototype-tee-black"
                    required
                  />
                  <Input
                    label="Nama Produk *"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Prototype Tee"
                    required
                  />
                </div>
                
                <div className="grid lg:grid-cols-3 gap-6">
                  <Input
                    label="Harga *"
                    name="price"
                    type="number"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="299000"
                    required
                  />
                  <Input
                    label="Harga Coret (Opsional)"
                    name="originalPrice"
                    type="number"
                    value={formData.originalPrice}
                    onChange={handleInputChange}
                    placeholder="349000"
                  />
                  <Select
                    label="Kategori *"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    options={[
                      { value: 'tshirt', label: 'Kaos' },
                      { value: 'hoodie', label: 'Hoodie' },
                      { value: 'pants', label: 'Pants' },
                      { value: 'accessories', label: 'Aksesoris' },
                    ]}
                    required
                  />
                </div>
                
                <div className="grid lg:grid-cols-2 gap-6">
                  <Input
                    label="Ukuran (pisahkan koma) *"
                    name="sizes"
                    value={formData.sizes}
                    onChange={handleInputChange}
                    placeholder="S,M,L,XL,XXL"
                    required
                  />
                  <Select
                    label="Fit *"
                    name="fit"
                    value={formData.fit}
                    onChange={handleInputChange}
                    options={[
                      { value: 'oversized', label: 'Oversized' },
                      { value: 'regular', label: 'Regular' },
                      { value: 'slim', label: 'Slim' },
                    ]}
                    required
                  />
                </div>
                
                {/* Images */}
                <div>
                  <label className="block text-sm font-medium text-white mb-3">Gambar Produk (minimal 1, maksimal 3)</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {formData.images.map((img, i) => (
                      <div key={i} className="relative">
                        <Input
                          name={`image-${i}`}
                          value={img}
                          onChange={e => handleImageChange(i, e.target.value)}
                          placeholder={`URL Gambar ${i + 1}`}
                        />
                        {formData.images.length > 1 && (
                          <button
                            type="button"
                            onClick={() => {
                              const newImages = formData.images.filter((_, idx) => idx !== i);
                              setFormData(prev => ({ ...prev, images: newImages.length ? newImages : [''] }));
                            }}
                            className="absolute right-2 top-[38px] p-1 text-neutral-400 hover:text-red-400"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        )}
                      </div>
                    ))}
                    {formData.images.length < 3 && (
                      <button
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, images: [...prev.images, ''] }))}
                        className="col-span-1 h-full border-2 border-dashed border-neutral-700 rounded-lg flex items-center justify-center text-neutral-500 hover:border-[#C0392B] hover:text-[#C0392B] transition-colors"
                      >
                        + Tambah Gambar
                      </button>
                    )}
                  </div>
                </div>
                
                <Textarea
                  label="Deskripsi *"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Deskripsi produk..."
                  required
                />
                
                <div className="grid lg:grid-cols-2 gap-6">
                  <Textarea
                    label="Bahan (pisahkan baris baru)"
                    name="materials"
                    value={formData.materials}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="100% Cotton Combed 30s
Gramasi 200 GSM
Preshrunk & Anti-pilling"
                  />
                  <Textarea
                    label="Fitur (pisahkan baris baru)"
                    name="features"
                    value={formData.features}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Oversize Fit
Drop Shoulder
Crew Neck
Heavyweight Cotton"
                  />
                </div>
                
                {/* Stock */}
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Stok per Ukuran (JSON)</label>
                  <textarea
                    name="stock"
                    value={formData.stock}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#C0392B] focus:border-transparent"
                    placeholder='{"S":10,"M":20,"L":25,"XL":15,"XXL":5}'
                  />
                  <p className="mt-1 text-xs text-neutral-500">Format JSON. Key harus sesuai ukuran di atas.</p>
                </div>
                
                {/* Flags */}
                <div className="flex flex-wrap gap-6 pt-4 border-t border-neutral-800">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="isNew"
                      checked={formData.isNew}
                      onChange={handleInputChange}
                      className="w-4 h-4 accent-[#C0392B]"
                    />
                    <span className="text-neutral-300">New Badge</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="isFeatured"
                      checked={formData.isFeatured}
                      onChange={handleInputChange}
                      className="w-4 h-4 accent-[#C0392B]"
                    />
                    <span className="text-neutral-300">Featured Badge</span>
                  </label>
                </div>
                
                {/* Created At */}
                <Input
                  label="Tanggal Dibuat"
                  name="createdAt"
                  type="date"
                  value={formData.createdAt}
                  onChange={handleInputChange}
                />
                
                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-neutral-800">
                  <Button type="submit" size="lg" className="flex-1">
                    {editingProduct ? 'Simpan Perubahan' : 'Tambah Produk'}
                  </Button>
                  <Button type="button" variant="outline" size="lg" onClick={handleCancel} className="flex-1">
                    Batal
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPage;