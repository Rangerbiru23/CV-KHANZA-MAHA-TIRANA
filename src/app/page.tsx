'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Building2, Users, Award, Clock, CheckCircle, ArrowRight } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/logo.png" alt="CV KHANZA MAHA TIRANA" className="h-10 w-auto" />
              <div className="ml-3">
                <h1 className="text-xl font-bold text-gray-900">CV KHANZA MAHA TIRANA</h1>
                <p className="text-xs text-gray-600">Konstruksi Bangunan Sipil</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Tentang</Link>
              <Link href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Layanan</Link>
              <Link href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</Link>
              <Link href="/privacy" className="text-gray-700 hover:text-blue-600 transition-colors">Privacy</Link>
              <Link href="/terms" className="text-gray-700 hover:text-blue-600 transition-colors">Terms</Link>
            </div>

            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Beranda</Link>
              <Link href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Tentang</Link>
              <Link href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Layanan</Link>
              <Link href="#portfolio" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Portfolio</Link>
              <Link href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Kontak</Link>
              <Link href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Privacy</Link>
              <Link href="/terms" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Terms</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-16 min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img src="/hero-bg.jpg" alt="Construction Site" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              CV KHANZA MAHA TIRANA
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Konstruksi Bangunan Sipil Terpercaya
            </p>
            <p className="text-lg mb-12 text-blue-50 max-w-3xl mx-auto">
              Solusi terbaik untuk kebutuhan konstruksi bangunan sipil Anda. 
              Kami berkomitmen memberikan hasil kerja berkualitas tinggi dengan 
              standar keselamatan terbaik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Hubungi Kami
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                Lihat Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tentang <span className="text-blue-600">CV KHANZA MAHA TIRANA</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                CV KHANZA MAHA TIRANA adalah perusahaan konstruksi bangunan sipil yang 
                berpengalaman dan terpercaya. Dengan dedikasi tinggi terhadap kualitas 
                dan keselamatan, kami telah menyelesaikan berbagai proyek konstruksi 
                dengan hasil yang memuaskan.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Kami mengutamakan profesionalisme, integritas, dan inovasi dalam setiap 
                proyek yang kami kerjakan. Tim kami terdiri dari para ahli yang berpengalaman 
                di bidang konstruksi bangunan sipil.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Berpengalaman</h4>
                    <p className="text-gray-600">Tim profesional berpengalaman</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Berkualitas</h4>
                    <p className="text-gray-600">Standar kualitas tinggi</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Tepat Waktu</h4>
                    <p className="text-gray-600">Penyelesaian proyek tepat waktu</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Aman</h4>
                    <p className="text-gray-600">Prioritas keselamatan kerja</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img src="/about-image.jpg" alt="About Us" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami menyediakan berbagai layanan konstruksi bangunan sipil 
              untuk memenuhi kebutuhan proyek Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <Building2 className="text-blue-600 mb-4" size={48} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Konstruksi Gedung</h3>
              <p className="text-gray-600">
                Pembangunan gedung perkantoran, komersial, dan fasilitas umum 
                dengan desain struktural yang kuat dan efisien.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <Building2 className="text-blue-600 mb-4" size={48} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Jalan dan Jembatan</h3>
              <p className="text-gray-600">
                Pembangunan infrastruktur jalan raya, jembatan, dan 
                fasilitas transportasi lainnya.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <Building2 className="text-blue-600 mb-4" size={48} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Konstruksi Sipil</h3>
              <p className="text-gray-600">
                Berbagai jenis konstruksi sipil termasuk drainase, 
                irigasi, dan konstruksi infrastruktur lainnya.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <Building2 className="text-blue-600 mb-4" size={48} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Renovasi Bangunan</h3>
              <p className="text-gray-600">
                Jasa renovasi dan perbaikan bangunan existing untuk 
                meningkatkan fungsionalitas dan estetika.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <Building2 className="text-blue-600 mb-4" size={48} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Manajemen Proyek</h3>
              <p className="text-gray-600">
                Konsultasi dan manajemen proyek konstruksi dari perencanaan 
                hingga penyelesaian.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
              <Building2 className="text-blue-600 mb-4" size={48} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Supervisi Konstruksi</h3>
              <p className="text-gray-600">
                Pengawasan dan kontrol kualitas pekerjaan konstruksi 
                untuk memastikan standar terbaik.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Portfolio Proyek
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beberapa proyek yang telah kami selesaikan dengan hasil yang memuaskan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src="/project1.jpg" alt="Jembatan Konstruksi" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Jembatan Kota Baru</h3>
                <p className="text-gray-600 mb-4">
                  Pembangunan jembatan dengan panjang 150 meter untuk menghubungkan 
                  dua wilayah kota.
                </p>
                <div className="flex items-center text-blue-600 hover:text-blue-700 cursor-pointer">
                  <span className="font-medium">Lihat Detail</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src="/project2.jpg" alt="Gedung Komersial" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Gedung Perkantoran Modern</h3>
                <p className="text-gray-600 mb-4">
                  Konstruksi gedung perkantoran 8 lantai dengan desain modern 
                  dan fasilitas lengkap.
                </p>
                <div className="flex items-center text-blue-600 hover:text-blue-700 cursor-pointer">
                  <span className="font-medium">Lihat Detail</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src="/project3.jpg" alt="Jalan Raya" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Jalan Tol Lingkar Luar</h3>
                <p className="text-gray-600 mb-4">
                  Pembangunan jalan tol sepanjang 25 km dengan standar 
                  kualitas internasional.
                </p>
                <div className="flex items-center text-blue-600 hover:text-blue-700 cursor-pointer">
                  <span className="font-medium">Lihat Detail</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Siap untuk mewujudkan proyek konstruksi Anda? Hubungi kami hari ini!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informasi Kontak <span className="text-blue-600">CV KHANZA MAHA TIRANA</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Alamat</h4>
                    <p className="text-gray-600">
                      UKO DAAN MOGOT BARU LANTAI 3 BLOK LC-1 NO. 3A<br />
                      Kel. Kalideres, Kec. Kalideres<br />
                      Kota Adm. Jakarta Barat, Prop. DKI Jakarta
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Telepon</h4>
                    <p className="text-gray-600">082382466172</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">khanzamahatirana@outlook.co.id</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Jam Operasional</h4>
                <p className="text-gray-600">
                  Senin - Jumat: 08:00 - 17:00<br />
                  Sabtu: 08:00 - 12:00<br />
                  Minggu: Tutup
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Masukkan nama Anda"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subjek
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Subjek pesan"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tulis pesan Anda..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center mb-4">
                <img src="/logo.png" alt="CV KHANZA MAHA TIRANA" className="h-8 w-auto" />
                <h3 className="ml-3 text-xl font-bold">CV KHANZA MAHA TIRANA</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Perusahaan konstruksi bangunan sipil terpercaya yang berkomitmen 
                memberikan hasil kerja berkualitas tinggi dengan standar keselamatan terbaik.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Building2 size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Konstruksi Gedung</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Jalan dan Jembatan</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Konstruksi Sipil</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Renovasi Bangunan</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>082382466172</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail size={16} />
                  <span>khanzamahatirana@outlook.co.id</span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin size={16} className="mt-1" />
                  <span className="text-sm">
                    UKO DAAN MOGOT BARU LANTAI 3<br />
                    Jakarta Barat
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CV KHANZA MAHA TIRANA. All rights reserved.</p>
            <div className="mt-4 space-x-4">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}