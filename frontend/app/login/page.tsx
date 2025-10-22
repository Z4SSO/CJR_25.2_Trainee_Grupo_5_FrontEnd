import Image from "next/image";

export default function LoginPage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <div className="flex flex-row items-center justify-center w-4/5 gap-10">
        
        {/* Imagem */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/login-image.svg"
            alt="Login Image"
            width={500} 
            height={500}
            className="object-contain"
          />
        </div>

        {/* Card */}
        <div
          className="flex-1 flex flex-col p-10 rounded-lg shadow-lg max-w-md text-center"
          style={{ backgroundColor: "#e0e0e0" }} 
        >
          <h1
            className="font-bold text-2xl tracking-wider mb-6"
            style={{ color: "#ff6700" }} 
          >
            BEM VINDO DE VOLTA!
          </h1>

          <div className="flex flex-col gap-3 my-2 text-gray-800 mb-3">
            <input
              style={{ backgroundColor: "#f5f5f5" }}
              className="rounded-full p-2 border border-gray-300"
              type="text"
              name="Email"
              id="email"
              placeholder="Email"
            />
            <input
              style={{ backgroundColor: "#f5f5f5" }}
              className="rounded-full p-2 border border-gray-300"
              type="password"
              name="Senha"
              id="pass"
              placeholder="Senha"
            />
          </div>

          <p><a
            style={{ color: "#ff6700" }}
            className=" mb-5 hover:underline"
            href=""
          >
            Esqueceu a senha?
          </a></p>

          <button
            style={{ backgroundColor: "#ff6700", color: "#ffffff" }}
            className="rounded-full mt-6 p-2 hover:brightness-90 transition cursor-pointer"
          >
            Entrar
          </button>

          <p className="mt-2 text-gray-700">
            Não possui conta? <a href="" className="text-orange-500 hover:underline">Crie Aqui!</a>
          </p>
        </div>

      </div>
    </main>
  );
}
