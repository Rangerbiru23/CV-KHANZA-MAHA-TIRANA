'use client';

import Link from 'next/link';
import { ArrowLeft, FileText, CheckCircle, AlertCircle, Users, Hammer } from 'lucide-react';

export default function TermsAndConditions() {
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
            <FileText className="text-blue-600 mx-auto mb-4" size={48} />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Syarat dan Ketentuan
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Penerimaan Syarat</h2>
              <p className="text-gray-700 leading-relaxed">
                Dengan mengakses dan menggunakan layanan CV KHANZA MAHA TIRANA, Anda 
                menerima dan setuju untuk terikat oleh Syarat dan Ketentuan ini. 
                Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, 
                Anda tidak boleh menggunakan layanan kami.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Definisi</h2>
              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>"Perusahaan"</strong> merujuk pada CV KHANZA MAHA TIRANA, 
                    perusahaan konstruksi bangunan sipil yang berbasis di Jakarta Barat.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>"Klien"</strong> merujuk pada individu atau perusahaan 
                    yang menggunakan layanan konstruksi kami.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>"Layanan"</strong> merujuk pada semua jasa konstruksi 
                    bangunan sipil yang kami sediakan.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>"Proyek"</strong> merujuk pada pekerjaan konstruksi 
                    spesifik yang disepakati antara Perusahaan dan Klien.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Lingkup Layanan</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Hammer className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Jasa Konstruksi</h3>
                    <p className="text-gray-700">
                      Kami menyediakan layanan konstruksi bangunan sipil meliputi:
                      pembangunan gedung, jalan, jembatan, infrastruktur, dan renovasi bangunan.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Konsultasi Teknis</h3>
                    <p className="text-gray-700">
                      Layanan konsultasi terkait perencanaan dan pelaksanaan proyek konstruksi.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Users className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Manajemen Proyek</h3>
                    <p className="text-gray-700">
                      Koordinasi dan supervisi seluruh tahapan pelaksanaan proyek.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Kewajiban Perusahaan</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Melaksanakan pekerjaan sesuai dengan spesifikasi yang disepakati</li>
                <li>Menjamin kualitas pekerjaan sesuai standar industri</li>
                <li>Mematuhi semua peraturan keselamatan kerja yang berlaku</li>
                <li>Menyelesaikan proyek dalam waktu yang telah ditentukan</li>
                <li>Memberikan laporan kemajuan pekerjaan secara berkala</li>
                <li>Menangani perizinan yang diperlukan untuk pelaksanaan proyek</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Kewajiban Klien</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Memberikan informasi yang akurat terkait kebutuhan proyek</li>
                <li>Menyediakan akses ke lokasi proyek sesuai kesepakatan</li>
                <li>Melakukan pembayaran sesuai dengan jadwal yang disepakati</li>
                <li>Memberikan persetujuan untuk perubahan desain jika diperlukan</li>
                <li>Memastikan tidak ada gangguan pihak ketiga selama pelaksanaan</li>
                <li>Menyediakan fasilitas pendukung yang diperlukan</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Pembayaran</h2>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Syarat Pembayaran</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Uang muka minimum 30% dari total nilai kontrak</li>
                      <li>Pembayaran tahapan sesuai progress pekerjaan</li>
                      <li>Pelunasan maksimal 14 hari setelah serah terima proyek</li>
                      <li>Keterlambatan pembayaran dikenakan denda 0.5% per hari</li>
                      <li>Semua pembayaran dilakukan melalui rekening resmi perusahaan</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Jaminan dan Garansi</h2>
              <p className="text-gray-700 mb-4">
                Perusahaan memberikan jaminan untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Struktur bangunan: 12 bulan sejak serah terima</li>
                <li>Pekerjaan finishing: 6 bulan sejak serah terima</li>
                <li>Material yang digunakan sesuai spesifikasi</li>
                <li>Perbaikan cacat produksi atau kesalahan instalasi</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Jaminan tidak berlaku untuk kerusakan akibat bencana alam, 
                penggunaan yang tidak sesuai, atau modifikasi oleh pihak lain.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Kekayaan Intelektual</h2>
              <p className="text-gray-700">
                Semua desain, rencana teknis, dan dokumentasi yang dibuat oleh 
                Perusahaan merupakan kekayaan intelektual Perusahaan. Klien 
                mendapatkan hak penggunaan untuk proyek tertentu setelah 
                pelunasan pembayaran penuh.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Force Majeure</h2>
              <p className="text-gray-700">
                Perusahaan tidak bertanggung jawab atas keterlambatan atau 
                kegagalan pelaksanaan proyek yang disebabkan oleh kejadian 
                di luar kendali kami, termasuk tetapi tidak terbatas pada: 
                bencana alam, perang, kerusuhan, pemogokan, atau perubahan 
                peraturan pemerintah.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Penyelesaian Sengketa</h2>
              <p className="text-gray-700 mb-4">
                Setiap sengketa yang timbul dari Syarat dan Ketentuan ini akan 
                diselesaikan melalui:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Negosiasi damai antara kedua belah pihak</li>
                <li>Mediasi melalui pihak ketiga yang netral</li>
                <li>Arbitrase di Badan Arbitrase Nasional Indonesia (BANI)</li>
                <li>Pengadilan Negeri Jakarta Barat sebagai yurisdiksi terakhir</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Perubahan Syarat</h2>
              <p className="text-gray-700">
                Perusahaan berhak mengubah Syarat dan Ketentuan ini sewaktu-waktu. 
                Perubahan akan berlaku efektif setelah diumumkan melalui website 
                atau komunikasi resmi lainnya. Penggunaan layanan setelah 
                perubahan dianggap sebagai penerimaan syarat yang baru.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Kontak Kami</h2>
              <p className="text-gray-700 mb-4">
                Untuk pertanyaan atau klarifikasi mengenai Syarat dan Ketentuan ini, 
                silakan hubungi kami:
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

            <section className="mb-8">
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="text-yellow-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Pernyataan Akhir</h3>
                    <p className="text-gray-700">
                      Dengan menggunakan layanan CV KHANZA MAHA TIRANA, Anda menyatakan 
                      telah membaca, memahami, dan menyetujui Syarat dan Ketentuan ini 
                      secara keseluruhan. Syarat ini merupakan kesepakatan yang mengikat 
                      secara hukum antara Anda dan CV KHANZA MAHA TIRANA.
                    </p>
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
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
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