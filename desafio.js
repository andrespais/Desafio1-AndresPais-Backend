// Se define la variable ´products´ a nivel global como un Array

let products = [];

// Se define la variable constante ´addProduct´, la cual define el contenido de la Array, se le agrega el ID incrementable

const addProduct = (title, description, price, thumbnail, code, stock) => {
  const newProduct = {
    id: products.length + 1,
    title,
    description,
    price,
    thumbnail,
    code,
    stock,
  };

// Se aplica métodos para la definición de limites, para hacer que no sea posible dejar un espacio libre sin contestar, que haya un aviso de productos ya existentes y el pusheo de nuevos productos

  if (Object.values(newProduct).includes(undefined)) {
    console.log("Todos los campos son obligatorios");
    return;
  }

  const productExists = products.find((product) => product.code === code);
  if (productExists) {
    console.log(`El producto ${title} con el código ${code} ya existe`);
    return;
  }

  products.push(newProduct);
};

const getProducts = () => {
  console.log(products);
  return products;
};

const getProductById = (id) => {
  const product = products.find( product => product.id === id);
  if(!product) {
    console.log(`No se encontró el producto con el id ${id}`);
    return;
  }

  console.log(product);
  return product;
};

// Se testea

addProduct("Producto 1", "el primer producto", 299, "http://www.google.com", "ADF123", 10);
addProduct("Producto 2", "el segundo producto", 899, "http://www.google.com", "ADF124", 10);
addProduct("Producto 3", "el tercer producto", 899, "http://www.google.com", "ADF124", 10);

getProductById(1);


