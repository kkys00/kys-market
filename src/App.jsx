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
import { createContext, useReducer, useRef } from 'react'

const mockItems = {
  12345678: {
    "title": "맥북 프로 2019 중고 판매",
    "seller": "abc123",
    "price": 50000,
    "description": "맥북 프로 2019 13인치 모델입니다. RAM 16GB, SSD 512GB 사양이며 생활 기스 외에 큰 흠집 없이 깨끗합니다. 충전기 포함이며, 배터리 성능 85% 정도 남아 있습니다.",
    "transactionMethod": ["직거래", "우체국 택배"],
    "imgUrl": ["001.jpg", "002.jpg", "003.jpg"]
  },
  12345679: {
    "title": "프로그래밍 책 팝니다",
    "seller": "def456",
    "price": 10000,
    "description": "Python과 JavaScript 기본서를 포함한 3권의 책을 판매합니다. 모든 책은 필기 없이 깨끗한 상태이며, 한 권씩 구매도 가능합니다.",
    "transactionMethod": ["직거래", "편의점 택배"],
    "imgUrl": ["004.jpg", "005.jpg"]
  },
  12345680: {
    "title": "갤럭시 S10 중고 팝니다",
    "seller": "ghi789",
    "price": 25000,
    "description": "갤럭시 S10 블랙 색상 판매합니다. 약간의 사용감은 있지만 전체적으로 상태 양호합니다. 배터리 교체 이력 없으며, 충전기와 기본 케이스 포함입니다.",
    "transactionMethod": ["반값 택배"],
    "imgUrl": ["006.jpg", "007.jpg"]
  },
  12345681: {
    "title": "여성 원피스 판매합니다",
    "seller": "jkl012",
    "price": 15000,
    "description": "여름용 원피스입니다. 프리사이즈이며, 두세 번 착용 후 보관만 했습니다. 세탁 완료된 상태이며, 색상은 베이지입니다.",
    "transactionMethod": ["우체국 택배", "편의점 택배"],
    "imgUrl": ["008.jpg"]
  },
  12345682: {
    "title": "책상 싸게 가져가세요",
    "seller": "mno345",
    "price": 7000,
    "description": "중형 사이즈의 나무 책상입니다. 사용감은 있지만 큰 스크래치 없이 깔끔합니다. 조립형 제품이며, 해체해서 가져가야 합니다.",
    "transactionMethod": ["직거래", "반값 택배"],
    "imgUrl": ["009.jpg", "010.jpg"]
  },
  12345683: {
    "title": "전자레인지 급처!",
    "seller": "pqr678",
    "price": 35000,
    "description": "삼성 전자레인지 판매합니다. 2022년 구매했고, 사용 횟수가 많지 않아 상태가 좋습니다. 700W 출력이며, 해동 및 다양한 조리 기능이 가능합니다.",
    "transactionMethod": ["우체국 택배"],
    "imgUrl": ["011.jpg", "002.jpg"]
  },
  12345684: {
    "title": "중고 자전거 판매해요",
    "seller": "stu901",
    "price": 20000,
    "description": "26인치 MTB 자전거 판매합니다. 기어 변속 잘 되고 브레이크 상태도 양호합니다. 앞뒤 라이트 장착되어 있으며, 직접 시승 후 구매 가능해요.",
    "transactionMethod": ["직거래", "편의점 택배", "반값 택배"],
    "imgUrl": ["003.jpg", "008.jpg"]
  },
  12345685: {
    "title": "명품 가방 중고 판매",
    "seller": "vwx234",
    "price": 80000,
    "description": "정품 명품 가방입니다. 더스트백 포함이며, 사용감 거의 없습니다. 구매 영수증 및 보증서 함께 제공 가능합니다.",
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

export const ItemStateContext = createContext()
export const ItemDispatchContext = createContext()

function App() {
  const [items, updateItems] = useReducer(itemReducer, mockItems)
  const idRef = useRef(12345686)

  const onCreate = (title, seller, price, description, transactionMethod, imgUrl) => {
    updateItems({
      type: "CREATE",
      id: idRef.current++,
      data: {
        title,
        seller,
        price,
        description,
        transactionMethod,
        imgUrl
      }
    })
  }

  const onUpdate = (id, title, seller, price, description, transactionMethod, imgUrl) => {
    updateItems({
      type: "UPDATE",
      id,
      data: {
        title,
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
      <ItemStateContext.Provider value={items}>
        <ItemDispatchContext.Provider
          value={{ onCreate, onUpdate, onDelete }}>
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
        </ItemDispatchContext.Provider>
      </ItemStateContext.Provider>
    </>
  )
}

export default App
