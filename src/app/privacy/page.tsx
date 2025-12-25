'use client';

import Link from 'next/link';
import { ArrowLeft, Shield, Eye, Database, UserCheck, Lock } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img src="/logo.png" alt="CV KHANZA MAHA TIRANA" className="h-8 w-auto" />
                <div className="ml-3">
                  <h1 className="text-lg font-bold text-gray-900">CV KHANZA MAHA TIRANA</h1>
                  <p className="text-xs text-gray-600">Konstruksi Bangunan Sipil</p>
                </div>
              </Link>
            </div>
            
            <Link 
              href="/" 
              className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <Shield className="text-blue-600 mx-auto mb-4" size={48} />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Kebijakan Privasi
            </h1>
            <p className="text-lg text-gray-600">
              CV KHANZA MAHA TIRANA - Konstruksi Bangunan Sipil
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Pendahuluan</h2>
              <p className="text-gray-700 leading-relaxed">
                Selamat datang di CV KHANZA MAHA TIRANA. Kami sangat menghargai privasi Anda 
                dan berkomitmen untuk melindungi informasi pribadi yang Anda berikan kepada kami. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, 
                dan melindungi informasi pribadi Anda ketika menggunakan layanan kami.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Informasi yang Kami Kumpulkan</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <UserCheck className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Informasi Identitas Pribadi</h3>
                    <p className="text-gray-700">
                      Nama, alamat email, nomor telepon, alamat fisik, dan informasi kontak lainnya 
                      yang Anda berikan saat menghubungi kami atau menggunakan layanan kami.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Database className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Informasi Bisnis</h3>
                    <p className="text-gray-700">
                      Nama perusahaan, jabatan, dan informasi terkait proyek konstruksi yang 
                      Anda diskusikan dengan kami.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Eye className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Informasi Penggunaan</h3>
                    <p className="text-gray-700">
                      Data tentang bagaimana Anda berinteraksi dengan website kami, termasuk 
                      alamat IP, browser yang digunakan, dan halaman yang dikunjungi.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Penggunaan Informasi</h2>
              <p className="text-gray-700 mb-4">
                Kami menggunakan informasi yang kami kumpulkan untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Merespons pertanyaan dan permintaan Anda</li>
                <li>Memberikan informasi tentang layanan konstruksi kami</li>
                <li>Mengelola dan menyelesaikan proyek konstruksi</li>
                <li>Mengirimkan penawaran dan proposal proyek</li>
                <li>Meningkatkan kualitas layanan kami</li>
                <li>Menghubungi Anda untuk tujuan bisnis yang terkait</li>
                <li>Memenuhi kewajiban hukum dan peraturan</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Perlindungan Data</h2>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <div className="flex items-start space-x-3">
                  <Lock className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Keamanan Informasi</h3>
                    <p className="text-gray-700">
                      Kami berkomitmen untuk melindungi informasi pribadi Anda dengan menerapkan 
                      langkah-langkah keamanan yang sesuai, termasuk:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
                      <li>Enkripsi data sensitif</li>
                      <li>Akses terbatas ke informasi pribadi</li>
                      <li>Prosedur keamanan fisik dan digital</li>
                      <li>Monitoring rutin terhadap sistem keamanan</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Berbagi Informasi</h2>
              <p className="text-gray-700 mb-4">
                Kami tidak akan menjual, menyewakan, atau membagikan informasi pribadi Anda 
                kepada pihak ketiga tanpa persetujuan Anda, kecuali dalam situasi berikut:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Dengan persetujuan eksplisit dari Anda</li>
                <li>Untuk memenuhi kewajiban hukum atau peraturan</li>
                <li>Untuk melindungi hak, properti, atau keselamatan kami atau orang lain</li>
                <li>Dengan mitra bisnis tepercaya yang membantu kami menyediakan layanan</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Hak Anda</h2>
              <p className="text-gray-700 mb-4">
                Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Mengakses informasi pribadi yang kami simpan tentang Anda</li>
                <li>Memperbarui informasi pribadi yang tidak akurat</li>
                <li>Menghapus informasi pribadi Anda (dalam batas yang diizinkan oleh hukum)</li>
                <li>Menolak pemasaran langsung dari kami</li>
                <li>Meminta salinan informasi pribadi Anda</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies</h2>
              <p className="text-gray-700">
                Website kami mungkin menggunakan cookies untuk meningkatkan pengalaman pengguna. 
                Cookies adalah file kecil yang disimpan di browser Anda. Anda dapat mengatur 
                browser untuk menolak cookies, namun ini dapat mempengaruhi fungsionalitas website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Perubahan Kebijakan</h2>
              <p className="text-gray-700">
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan 
                akan diposting di halaman ini dengan tanggal terakhir diperbarui. Kami 
                mendorong Anda untuk secara berkala meninjau kebijakan ini.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Kontak Kami</h2>
              <p className="text-gray-700 mb-4">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau perlakuan 
                kami terhadap informasi pribadi Anda, silakan hubungi kami:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-3">
                  <div>
                    <strong className="text-gray-900">Nama Perusahaan:</strong>
                    <span className="text-gray-700 ml-2">CV KHANZA MAHA TIRANA</span>
                  </div>
                  <div>
                    <strong className="text-gray-900">Email:</strong>
                    <span className="text-gray-700 ml-2">khanzamahatirana@outlook.co.id</span>
                  </div>
                  <div>
                    <strong className="text-gray-900">Telepon:</strong>
                    <span className="text-gray-700 ml-2">082382466172</span>
                  </div>
                  <div>
                    <strong className="text-gray-900">Alamat:</strong>
                    <span className="text-gray-700 ml-2">
                      UKO DAAN MOGOT BARU LANTAI 3 BLOK LC-1 NO. 3A, 
                      Kel. Kalideres, Kec. Kalideres, 
                      Kota Adm. Jakarta Barat, Prop. DKI Jakarta
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <img src="/logo.png" alt="CV KHANZA MAHA TIRANA" className="h-8 w-auto" />
              <h3 className="ml-3 text-xl font-bold">CV KHANZA MAHA TIRANA</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Perusahaan konstruksi bangunan sipil terpercaya
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Beranda
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              &copy; 2024 CV KHANZA MAHA TIRANA. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}