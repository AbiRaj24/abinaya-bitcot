
export const fetchContacts = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/BitcotDev/fresher-machin-test/main/json/sample.json"
  );
  const data = await res.json();
  return data;
};