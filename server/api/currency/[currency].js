export default defineEventHandler(async (event) => {
  const { currency } = event.context.params;
  const { currencyKey } = useRuntimeConfig();

  console.warn("currency ", currency);
  console.warn("currencyKey ", currencyKey);

  const uri = `https://api.currencyapi.com/v3/latest?apikey=${currencyKey}&currencies=${currency}`;

  const { data } = await $fetch(uri);

  return data;
});
//https://api.currencyapi.com/v3/latest?apikey=cur_live_5dlljYomCufe5ji9xOhEnzkBRapyaEXNCYAFNDLH&currencies=EUR%2CUSD%2CCAD
