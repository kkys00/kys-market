import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import New from './pages/New'
import Edit from './pages/Edit'
import Notfound from './pages/Notfound'
import Market from './pages/Market'
import Header from './components/Header'
import Nav from './components/Nav'
import { useReducer, useRef } from 'react'

const mockItems = {
  12345678: {
    "seller": "홍길동",
    "price": 50000,
    "description": "상태 좋은 중고 노트북입니다.",
    "transactionMethod": ["직거래", "우체국 택배"],
    "imgUrl": ["001.jpg", "002.jpg", "003.jpg"]
  },
  12345679: {
    "seller": "김철수",
    "price": 10000,
    "description": "중고 책",
    "transactionMethod": ["직거래", "편의점 택배"],
    "imgUrl": ["004.jpg", "005.jpg"]
  },
  12345680: {
    "seller": "이수민",
    "price": 25000,
    "description": "중고 스마트폰",
    "transactionMethod": ["반값 택배"],
    "imgUrl": ["006.jpg", "007.jpg"]
  },
  12345681: {
    "seller": "박진수",
    "price": 15000,
    "description": "여성 의류",
    "transactionMethod": ["우체국 택배", "편의점 택배"],
    "imgUrl": ["008.jpg"]
  },
  12345682: {
    "seller": "정우성",
    "price": 7000,
    "description": "중고 책상",
    "transactionMethod": ["직거래", "반값 택배"],
    "imgUrl": ["009.jpg", "010.jpg"]
  },
  12345683: {
    "seller": "김예림",
    "price": 35000,
    "description": "전자레인지",
    "transactionMethod": ["우체국 택배"],
    "imgUrl": ["011.jpg", "002.jpg"]
  },
  12345684: {
    "seller": "최민호",
    "price": 20000,
    "description": "중고 자전거",
    "transactionMethod": ["직거래", "편의점 택배", "반값 택배"],
    "imgUrl": ["003.jpg", "008.jpg"]
  },
  12345685: {
    "seller": "박수진",
    "price": 80000,
    "description": "고급 가방",
    "transactionMethod": ["편의점 택배", "반값 택배"],
    "imgUrl": ["004.jpg"]
  }
};

function itemReducer(state, action) {
  switch (action.type) {
    case "CREATE":
    case "UPDATE":
      return {
        ...state,
        [action.id]: action.data
      }
    case "DELETE": {
      const { [action.id]: _, ...remainingItems } = state
      return remainingItems
    }
    default:
      return state
  }
}

function App() {
  const [items, updateItems] = useReducer(itemReducer, mockItems)
  const idRef = useRef(12345686)

  const onCreate = (seller, price, description, transactionMethod, imgUrl) => {
    updateItems({
      type: "CREATE",
      id: idRef.current++,
      data: {
        seller,
        price,
        description,
        transactionMethod,
        imgUrl
      }
    })
  }

  const onUpdate = (id, seller, price, description, transactionMethod, imgUrl) => {
    updateItems({
      type: "UPDATE",
      id,
      data: {
        seller,
        price,
        description,
        transactionMethod,
        imgUrl
      }
    })
  }

  const onDelete = (id) => {
    updateItems({
      type: "DELETE",
      id
    })
  }

  return (
    <>
      <Header />
      <Nav />
      <div className="contentContainer">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/market' element={<Market />} />
          <Route path='/new' element={<New />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/*' element={<Notfound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
