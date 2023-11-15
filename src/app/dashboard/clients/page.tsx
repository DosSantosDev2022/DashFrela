import Button from "@/components/buttons/button";


export  default function ClientsPage() {
  return (
    <>
      <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between p-6 border">
            <p className="text-MyColor02 font-medium text-lg">Clientes cadastrados</p>
            <Button >Cadastrar cliente</Button>
          </div>
      </div>
    </>
  );
};


