import Image from "next/image";

export default function CadastroPage() {
  return (
    <main
      className="bg-background min-h-screen flex items-center justify-center"
    >
      <div className="flex flex-row items-center justify-center w-full max-w-6xl mx-auto gap-10">
        
        {/* Card */}
        <div
          className="bg-card flex-1 flex flex-col p-10 rounded-2xl shadow-lg max-w-md text-center"
        >
          <h1
            className="text-laranja font-sans font-extrabold text-4xl tracking-wider mb-6"
          >
            Cadastre-se
          </h1>

          <div className="flex flex-col gap-3 my-2 text-gray-800 mb-3">
            <input
              className="bg-background rounded-full p-2 pl-4 border border-gray-300"
              type="text"
              name="nome"
              placeholder="Nome Completo"
            />
            <input
              className="bg-background rounded-full p-2 pl-4 border border-gray-300"
              type="text"
              name="user"
              placeholder="Username"
            />
            <input
              className="bg-background rounded-full p-2 pl-4 border border-gray-300"
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              className="bg-background rounded-full p-2 pl-4 border border-gray-300"
              type="password"
              name="pass"
              placeholder="Senha"
            />
            <input
              className="bg-background rounded-full p-2 pl-4 border border-gray-300"
              type="password"
              name="pass_confirm"
              placeholder="Confirme a senha"
            />
          </div>

          <button
            className="bg-laranja text-white font-sans tracking-wider text-xl rounded-full mt-6 p-3 hover:brightness-90 hover:scale-102 transition cursor-pointer"
          >
            Cadastrar
          </button>

          <p className="mt-2 text-gray-700">
            Já possui conta? <a href="/login" className="text-orange-500 hover:underline">Entre aqui</a>
          </p>
        </div>

        {/* Imagem */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/cadastro-image.svg"
            alt="Cadastro Image"
            width={700} 
            height={700}
            className="object-contain"
          />
        </div>

      </div>
    </main>
  );
}
