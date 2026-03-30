import React from 'react'
import Card from '../ui/Card'

const Collection = () => {
    
  const categories = [
    {
      name: "beauty",
      width: "18rem",
      height: "22rem",
      color: "#FFC0CB",
      textColor: "#000000",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800",
    },
    {
      name: "fragrances",
      width: "16rem",
      height: "20rem",
      color: "#E6E6FA",
      textColor: "#000000",
      image:
        "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800",
    },
    {
      name: "furniture",
      width: "22rem",
      height: "24rem",
      color: "#DEB887",
      textColor: "#000000",
      image:
        "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800",
    },
    {
      name: "groceries",
      width: "20rem",
      height: "23rem",
      color: "#98FB98",
      textColor: "#000000",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800",
    },
    {
      name: "home-decoration",
      width: "19rem",
      height: "22rem",
      color: "#FFDAB9",
      textColor: "#000000",
      image:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800",
    },
    {
      name: "kitchen-accessories",
      width: "17rem",
      height: "21rem",
      color: "#FFFACD",
      textColor: "#000000",
      image:
        "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=800",
    },
    {
      name: "laptops",
      width: "21rem",
      height: "23rem",
      color: "#D3D3D3",
      textColor: "#000000",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",
    },
    {
      name: "mens-shirts",
      width: "18rem",
      height: "22rem",
      color: "#ADD8E6",
      textColor: "#000000",
      image:
        "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=800",
    },
    {
      name: "mens-shoes",
      width: "20rem",
      height: "23rem",
      color: "#A9A9A9",
      textColor: "#FFFFFF",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
    },
    {
      name: "mens-watches",
      width: "16rem",
      height: "20rem",
      color: "#C0C0C0",
      textColor: "#000000",
      image:
        "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800",
    },
    {
      name: "mobile-accessories",
      width: "19rem",
      height: "22rem",
      color: "#B0E0E6",
      textColor: "#000000",
      image:
        "https://images.unsplash.com/photo-1512499617640-c2f999098c01?w=800",
    },
    {
      name: "motorcycle",
      width: "23rem",
      height: "25rem",
      color: "#2F4F4F",
      textColor: "#FFFFFF",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
    },
    {
      name: "skin-care",
      width: "17rem",
      height: "21rem",
      color: "#FFE4E1",
      textColor: "#000000",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800",
    },
    {
      name: "smartphones",
      width: "20rem",
      height: "23rem",
      color: "#708090",
      textColor: "#FFFFFF",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
    },
    {
      name: "sports-accessories",
      width: "18rem",
      height: "22rem",
      color: "#7CFC00",
      textColor: "#000000",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800",
    },
    {
      name: "sunglasses",
      width: "15rem",
      height: "19rem",
      color: "#000000",
      textColor: "#FFFFFF",
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800",
    },
    {
      name: "tablets",
      width: "19rem",
      height: "22rem",
      color: "#4682B4",
      textColor: "#FFFFFF",
      image:
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800",
    },
    {
      name: "tops",
      width: "17rem",
      height: "21rem",
      color: "#FF69B4",
      textColor: "#FFFFFF",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
    },
    {
      name: "vehicle",
      width: "24rem",
      height: "26rem",
      color: "#696969",
      textColor: "#FFFFFF",
      image:
        "https://images.unsplash.com/photo-1493238792000-8113da705763?w=800",
    },
    {
      name: "womens-bags",
      width: "18rem",
      height: "22rem",
      color: "#DA70D6",
      textColor: "#FFFFFF",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800",
    },
    {
      name: "womens-dresses",
      width: "21rem",
      height: "24rem",
      color: "#FFB6C1",
      textColor: "#000000",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800",
    },
    {
      name: "womens-jewellery",
      width: "16rem",
      height: "20rem",
      color: "#FFD700",
      textColor: "#000000",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
    },
    {
      name: "womens-shoes",
      width: "19rem",
      height: "23rem",
      color: "#DB7093",
      textColor: "#FFFFFF",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800",
    },
    {
      name: "womens-watches",
      width: "17rem",
      height: "21rem",
      color: "#C71585",
      textColor: "#FFFFFF",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
    },
  ];
 
  return (
    <>
    <section className='flex items-center justify-center flex-wrap gap-6 p-24'>
        {categories.map((data, id)=>{
            return <Card key={id} data={data}/>
        })}
        
        
    </section>
    </>
  )
}

export default Collection