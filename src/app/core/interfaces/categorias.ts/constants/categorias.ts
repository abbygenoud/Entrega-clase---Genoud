import { Categoria } from "../interfaces/categorias"
export const CATEGORIAS:Categoria[] = [

  {nombre: "Hamburguesas",
    id: 1,
    imgUrl: 'https://recetasdeusa.com/wp-content/uploads/2022/05/Hamburguesa-americana-1-scaled.jpg',
    
    productos:[{
    id: 1,
    nombre:'Hamburguesa simple',
    precio: 2500,
    imagen: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$krXm2g5T/200/200/original?country=ar",
    ingredientes: ["Pan, carne, cebolla, ketchup, feta de cheddar"]
},
  { id: 2,
  nombre: 'Hamburguesa triple',
  precio: 3500,
  imagen: "https://trending-media.com/wp-content/uploads/2020/11/McDonalds-PedidosYA-transp.png",
  ingredientes: ["Pan, 3 carnes, doble cheddar"]
  },
  {
    id: 3,
    nombre: 'Cheddar McMelt',
    precio: 4200,
    imagen: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kPXPtaX9/200/200/original?country=ar",
    ingredientes:["Pan, carne, fetas cheddar, salsa cheddar"]
  }
  ]
  },

    //{nombre : 'Hamburguesas', id:1, imgUrl: 'https://osojimix.com/wp-content/uploads/2021/04/hamburguesa.jpg',productos: []},
    
    {nombre : 'Pizzas', id:2, imgUrl: 'https://www.saborusa.com/ni/wp-content/uploads/sites/19/2019/10/Disfruta-una-suculenta-pizza-al-estilo-New-York-en-Bogota-Foto-destacada.png',
    productos: [
      {
      id: 4,
      nombre:'Margarita',
      precio: 3000,
      imagen: "https://images.hola.com/imagenes/cocina/recetas/20190911149183/pizza-margarita/0-717-935/pizza-m.jpg",
      ingredientes: ["queso muzzarella, salsa de tomate, blend de quesos"],
      },
      {
      id: 5,  
      nombre:'Splinter',
      precio: 3500,
      imagen:"https://static.vecteezy.com/system/resources/previews/016/212/231/non_2x/vegetarian-pizza-with-peppers-mushrooms-and-olives-photo.jpg",
      ingredientes:["queso muzzarella, salsa de tomate, blend de quesos, champignones, panceta"],
      },
      {
      id: 6,
      nombre:'Pepperoni',
      precio: 3500,
      imagen:"https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/onhsiagk/b9670222-c17b-4781-8b90-e51d64e380df.jpg",
      ingredientes:["queso muzzarella, salsa de tomate, blend de quesos, pepperoni"],
      }
    ]},

    {nombre : 'Postres', id:3, imgUrl: 'https://i.blogs.es/948245/mousse_yogur/1366_2000.jpg',
    productos: [
      {
      id: 7,
      nombre:'Chocotorta',
      precio: 1000,
      imagen: "https://www.rionegro.com.ar/wp-content/uploads/2021/06/choccc-1.jpg?w=1024",
      ingredientes: ["Queso crema, dulce de leche, chocolinas"],
      },
      {
      id: 8,
      nombre:'Brownie con helado',
      precio: 1500,
      imagen:"https://cocina-casera.com/wp-content/uploads/2015/04/brownie_chocolate_receta.jpg",
      ingredientes:["Brownie, bocha de helado"],
      },
      {
      id: 9,  
      nombre:'Lemon Pie',
      precio: 1500,
      imagen:"https://www.gadgetscuina.com/blog/cache/resize_800/2017/01/570743856.png",
      ingredientes:[""],
      }
    ]},

    {nombre : 'Bebidas', id:4, imgUrl: 'https://img.freepik.com/foto-gratis/vista-frontal-diferentes-bebidas-coloridas-dentro-botellas_140725-14407.jpg?w=2000',
    productos: [
      {
      id: 10,
      nombre:'Agua sin gas 500ml',
      precio: 800,
      imagen:"https://jumboargentina.vtexassets.com/arquivos/ids/556224/Villavicencio-Pet-Sin-Gas-500-Ml-2-239939.jpg?v=637105938780000000",
      ingredientes:[""]
      },
      {
      id: 11,
      nombre:'Caipiroska',
      precio: 2000,
      imagen:"https://www.licor43.com/es-mx/wp-content/uploads/sites/6/2019/10/l43-recipe-square--0044-caipiroska-43-1600x1600.jpg",
      ingredientes:[""]
      },
      {
      id: 12, 
      nombre:'Gin Tonic',
      precio: 2000,
      imagen:"https://www.paulinacocina.net/wp-content/uploads/2022/05/gin-tonic-receta.jpg",
      ingredientes:[""]
      }
    ]},
  ]

 