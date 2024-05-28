console.log("Json");

const jsonString ="{\"userId\":1,\"id\":1,\"title\":\"suntautfacererepellatprovidentoccaecatiexcepturioptioreprehenderit\",\"body\":\"quiaetsuscipit\\nsuscipitrecusandaeconsequunturexpeditaetcum\\nreprehenderitmolestiaeututquastotam\\nnostrumrerumestautemsuntremevenietarchitecto\"}"

  const jsonObject = JSON.parse(jsonString);

  console.log(jsonObject);

  const backTOString = JSON.stringify(jsonObject);

  const string = JSON.parse(backTOString);

  console.log(backTOString);
  console.log(string);