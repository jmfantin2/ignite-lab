import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";

export function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // will run only when createSubscriber is activated in the handler!
  const [createSubscriber, { loading }] = useMutation(
    CREATE_SUBSCRIBER_MUTATION
  );

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();
    console.log(name, email);
    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate("/event");
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      {/* call to action and sub box */}
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        {/*call to action*/}
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="ml-3 mt-8 text-[2.5rem] leading-tight">
            <strong className="text-orange-300">against</strong> the grain and{" "}
            <br />
            <strong className="text-red-400">deeper</strong> than spacetime
          </h1>
          <p className="ml-3 mt-4 text-gray-200 leading-relaxed">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </p>
        </div>
        {/*sub box*/}
        <div className="rounded p-8 bg-gray-600 border border-gray-500">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="mt-4 bg-orange-600 uppercase py-4 rounded font-bold text-sm hover:bg-green-500 transition-colors disabled:bg-green-500"
              type="submit"
              disabled={loading}
            >
              {loading ? "Ótimo! Aguarde :)" : "Garantir minha vaga"}
            </button>
          </form>
        </div>
      </div>
      <img
        className="fixed bottom-0 w-full opacity-20"
        src="/src/assets/landscape.png"
        alt=""
      />
    </div>
  );
}

// BACKEND: receive the damn data
const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation createSubscriber($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`;
