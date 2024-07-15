import { initMercadoPago } from "@mercadopago/sdk-react";
initMercadoPago(process.env.MP_PUBLIC_KEY || "");
import { Payment } from "@mercadopago/sdk-react";

const initialization = {
  amount: 100,
  preferenceId: "<PREFERENCE_ID>",
};
const customization = {
  paymentMethods: {
    ticket: "all",
    bankTransfer: "all",
    creditCard: "all",
    debitCard: "all",
    mercadoPago: "all",
  },
};
const onSubmit = async ({ selectedPaymentMethod, formData }) => {
  // callback chamado ao clicar no botão de submissão dos dados
  return new Promise<void>((resolve, reject) => {
    fetch("/process_payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((response) => {
        // receber o resultado do pagamento
        resolve();
      })
      .catch((error) => {
        // lidar com a resposta de erro ao tentar criar o pagamento
        reject();
      });
  });
};
const onError = async (error: any) => {
  // callback chamado para todos os casos de erro do Brick
  console.log(error);
};
const onReady = async () => {
  /*
      Callback chamado quando o Brick estiver pronto.
      Aqui você pode ocultar loadings do seu site, por exemplo.
    */
};

<Payment
  initialization={initialization}
  customization={customization}
  onSubmit={onSubmit}
  onReady={onReady}
  onError={onError}
/>;
