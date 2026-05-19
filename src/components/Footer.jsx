export default function Footer() {
  return (
    <footer className="bg-black/20 border-t border-white/10 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-10 text-white">

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h2 className="text-2xl font-bold text-cyan-300">
              PawPal
            </h2>

            <p className="mt-3 text-gray-300">
              Helping pets find loving homes and caring families.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-3">
              Contact
            </h3>

            <p>Email: rukshanaafrinety@gmail.com</p>
            <p>Phone: +8801700000000</p>
            <p>Location: Dhaka, Bangladesh</p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-3">
              Social Links
            </h3>

            <p>Facebook</p>
            <p>Instagram</p>
            <p>LinkedIn</p>
          </div>

        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center">

          © 2026 PawPal. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}