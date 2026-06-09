import { Component , OnInit, EventEmitter , Output, Input} from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { NgClass, NgStyle } from '@angular/common';
import { LightBox } from '../../directives/light-box';
import { Zoom } from '../../directives/zoom';
import { ThreeWordsPipe } from '../../Pipes/three-words-pipe'
@Component({
  selector: 'app-products',
  imports: [NgStyle, NgClass, LightBox, Zoom, ThreeWordsPipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class products implements OnInit{  
  productList: IProduct[];
  filterdList!: IProduct[];
  totalPrice : number = 0;
  @Input() isNight: boolean = false;
  @Input() selectedCategory: any = 0;
  @Input() selectedSort: any = 0;
  @Output() totalPriceChanged = new EventEmitter<number>();
  constructor() {
    this.productList = [
      {
        "id": 1,
        "title": "Essence Mascara Lash Princess",
        "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
        "category": "beauty",
        "categoryId": 1,
        "price": 9.99,
        "quantity": 99,
        "image": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
      },
      {
        "id": 2,
        "title": "Eyeshadow Palette with Mirror",
        "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
        "category": "beauty",
        "categoryId": 1,
        "price": 19.99,
        "quantity": 34,
        "image": "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp"
      },
      {
        "id": 3,
        "title": "Powder Canister",
        "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
        "category": "beauty",
        "categoryId": 1,
        "price": 14.99,
        "quantity": 89,
        "image": "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp"
      },
      {
        "id": 4,
        "title": "Red Lipstick",
        "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
        "category": "beauty",
        "categoryId": 1,
        "price": 12.99,
        "quantity": 91,
        "image": "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp"
      },
      {
        "id": 5,
        "title": "Red Nail Polish",
        "description": "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
        "category": "beauty",
        "categoryId": 1,
        "price": 8.99,
        "quantity": 79,
        "image": "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp"
      },
      {
        "id": 6,
        "title": "Calvin Klein CK One",
        "description": "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
        "category": "fragrances",
        "categoryId": 2,
        "price": 49.99,
        "quantity": 29,
        "image": "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp"
      },
      {
        "id": 7,
        "title": "Chanel Coco Noir Eau De",
        "description": "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
        "category": "fragrances",
        "categoryId": 2,
        "price": 129.99,
        "quantity": 58,
        "image": "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp"
      },
      {
        "id": 8,
        "title": "Dior J'adore",
        "description": "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
        "category": "fragrances",
        "categoryId": 2,
        "price": 89.99,
        "quantity": 98,
        "image": "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/1.webp"
      },
      {
        "id": 9,
        "title": "Dolce Shine Eau de",
        "description": "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
        "category": "fragrances",
        "categoryId": 2,
        "price": 69.99,
        "quantity": 4,
        "image": "https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/1.webp"
      },
      {
        "id": 10,
        "title": "Gucci Bloom Eau de",
        "description": "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
        "category": "fragrances",
        "categoryId": 2,
        "price": 79.99,
        "quantity": 91,
        "image": "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/1.webp"
      },
      {
        "id": 11,
        "title": "Annibale Colombo Bed",
        "description": "The Annibale Colombo Bed is a luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
        "category": "furniture",
        "categoryId": 3,
        "price": 1899.99,
        "quantity": 88,
        "image": "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/1.webp"
      },
      {
        "id": 12,
        "title": "Annibale Colombo Sofa",
        "description": "The Annibale Colombo Sofa is a sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
        "category": "furniture",
        "categoryId": 3,
        "price": 2499.99,
        "quantity": 60,
        "image": "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/1.webp"
      },
      {
        "id": 13,
        "title": "Bedside Table African Cherry",
        "description": "The Bedside Table in African Cherry is a stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
        "category": "furniture",
        "categoryId": 3,
        "price": 299.99,
        "quantity": 64,
        "image": "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/1.webp"
      },
      {
        "id": 14,
        "title": "Knoll Saarinen Executive Conference Chair",
        "description": "The Knoll Saarinen Executive Conference Chair is a modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
        "category": "furniture",
        "categoryId": 3,
        "price": 499.99,
        "quantity": 26,
        "image": "https://cdn.dummyjson.com/product-images/furniture/knoll-saarinen-executive-conference-chair/1.webp"
      },
      {
        "id": 15,
        "title": "Wooden Bathroom Sink With Mirror",
        "description": "The Wooden Bathroom Sink with Mirror is a unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
        "category": "furniture",
        "categoryId": 3,
        "price": 799.99,
        "quantity": 7,
        "image": "https://cdn.dummyjson.com/product-images/furniture/wooden-bathroom-sink-with-mirror/1.webp"
      },
      {
        "id": 16,
        "title": "Apple",
        "description": "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
        "category": "groceries",
        "categoryId": 4,
        "price": 1.99,
        "quantity": 8,
        "image": "https://cdn.dummyjson.com/product-images/groceries/apple/1.webp"
      },
      {
        "id": 17,
        "title": "Beef Steak",
        "description": "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
        "category": "groceries",
        "categoryId": 4,
        "price": 12.99,
        "quantity": 86,
        "image": "https://cdn.dummyjson.com/product-images/groceries/beef-steak/1.webp"
      },
      {
        "id": 18,
        "title": "Cat Food",
        "description": "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
        "category": "groceries",
        "categoryId": 4,
        "price": 8.99,
        "quantity": 46,
        "image": "https://cdn.dummyjson.com/product-images/groceries/cat-food/1.webp"
      },
      {
        "id": 19,
        "title": "Chicken Meat",
        "description": "Fresh and tender chicken meat, suitable for various culinary preparations.",
        "category": "groceries",
        "categoryId": 4,
        "price": 9.99,
        "quantity": 97,
        "image": "https://cdn.dummyjson.com/product-images/groceries/chicken-meat/1.webp"
      },
      {
        "id": 20,
        "title": "Cooking Oil",
        "description": "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
        "category": "groceries",
        "categoryId": 4,
        "price": 4.99,
        "quantity": 10,
        "image": "https://cdn.dummyjson.com/product-images/groceries/cooking-oil/1.webp"
      },
      {
        "id": 21,
        "title": "Cucumber",
        "description": "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.",
        "category": "groceries",
        "categoryId": 4,
        "price": 1.49,
        "quantity": 84,
        "image": "https://cdn.dummyjson.com/product-images/groceries/cucumber/1.webp"
      },
      {
        "id": 22,
        "title": "Dog Food",
        "description": "Specially formulated dog food designed to provide essential nutrients for your canine companion.",
        "category": "groceries",
        "categoryId": 4,
        "price": 10.99,
        "quantity": 71,
        "image": "https://cdn.dummyjson.com/product-images/groceries/dog-food/1.webp"
      },
      {
        "id": 23,
        "title": "Eggs",
        "description": "Fresh eggs, a versatile ingredient for baking, cooking, or breakfast.",
        "category": "groceries",
        "categoryId": 4,
        "price": 2.99,
        "quantity": 9,
        "image": "https://cdn.dummyjson.com/product-images/groceries/eggs/1.webp"
      },
      {
        "id": 24,
        "title": "Fish Steak",
        "description": "Quality fish steak, suitable for grilling, baking, or pan-searing.",
        "category": "groceries",
        "categoryId": 4,
        "price": 14.99,
        "quantity": 74,
        "image": "https://cdn.dummyjson.com/product-images/groceries/fish-steak/1.webp"
      },
      {
        "id": 25,
        "title": "Green Bell Pepper",
        "description": "Fresh and vibrant green bell pepper, perfect for adding color and flavor to your dishes.",
        "category": "groceries",
        "categoryId": 4,
        "price": 1.29,
        "quantity": 33,
        "image": "https://cdn.dummyjson.com/product-images/groceries/green-bell-pepper/1.webp"
      },
      {
        "id": 26,
        "title": "Green Chili Pepper",
        "description": "Spicy green chili pepper, ideal for adding heat to your favorite recipes.",
        "category": "groceries",
        "categoryId": 4,
        "price": 0.99,
        "quantity": 3,
        "image": "https://cdn.dummyjson.com/product-images/groceries/green-chili-pepper/1.webp"
      },
      {
        "id": 27,
        "title": "Honey Jar",
        "description": "Pure and natural honey in a convenient jar, perfect for sweetening beverages or drizzling over food.",
        "category": "groceries",
        "categoryId": 4,
        "price": 6.99,
        "quantity": 34,
        "image": "https://cdn.dummyjson.com/product-images/groceries/honey-jar/1.webp"
      },
      {
        "id": 28,
        "title": "Ice Cream",
        "description": "Creamy and delicious ice cream, available in various flavors for a delightful treat.",
        "category": "groceries",
        "categoryId": 4,
        "price": 5.49,
        "quantity": 27,
        "image": "https://cdn.dummyjson.com/product-images/groceries/ice-cream/1.webp"
      },
      {
        "id": 29,
        "title": "Juice",
        "description": "Refreshing fruit juice, packed with vitamins and great for staying hydrated.",
        "category": "groceries",
        "categoryId": 4,
        "price": 3.99,
        "quantity": 50,
        "image": "https://cdn.dummyjson.com/product-images/groceries/juice/1.webp"
      },
      {
        "id": 30,
        "title": "Kiwi",
        "description": "Nutrient-rich kiwi, perfect for snacking or adding a tropical twist to your dishes.",
        "category": "groceries",
        "categoryId": 4,
        "price": 2.49,
        "quantity": 99,
        "image": "https://cdn.dummyjson.com/product-images/groceries/kiwi/1.webp"
      }
    ]
  }
  
  ngOnInit(): void {
    this.filterdList = this.productList;
  }

filterProducts(catId: any) {
  const selectedCatId = Number(catId);

  if (selectedCatId === 0) {
    this.filterdList = this.productList;
  } else {
    this.filterdList = this.productList.filter((p: any) => Number(p.categoryId) === selectedCatId);
  }
}
sort(sortId: any) {
  const selectedSortId = Number(sortId);

  switch (selectedSortId) {
    case 1:
      this.filterdList = this.filterdList.sort((a: any, b: any) => a.price - b.price);  

      break;
    case 2:
      this.filterdList = this.filterdList.sort((a: any, b: any) => b.price - a.price);
      break;
    case 3:
      this.filterdList = this.filterdList.sort((a: any, b: any) => b.quantity - a.quantity);
      break;
    case 4:
      this.filterdList = this.filterdList.sort((a: any, b: any) => a.quantity - b.quantity);
      break;
    default:
      this.filterdList = this.filterdList;
      break;
  }
}

buyProduct(product: IProduct, quantity: any) {
    const count = Number(quantity);

    if (count > 0 && count <= product.quantity) {
      this.totalPrice += product.price * count;
      product.quantity -= count;

      this.totalPriceChanged.emit(this.totalPrice);
    } else {
      alert("Invalid quantity. Please enter a number between 1 and " + product.quantity);
    }
  }


  validateQuantity(event: any, maxQuantity: number) {
    const input = event.target;
    let value = Number(input.value);

    if (value < 1) {
      input.value = 1;
    } else if (value > maxQuantity) {
      input.value = maxQuantity;
    }
  }


}