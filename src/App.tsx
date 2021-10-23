import React, {useState} from 'react'
import Header from './comps/header'

function App() {
  const [headerStyle, setHeaderStyle]=useState<string>('static')
  const [drawer,setDrawer]=useState<boolean>(true)

  function onHeaderStyleChange(event: React.ChangeEvent<HTMLSelectElement>){
    setHeaderStyle(event.currentTarget.value);
  }

  function onDrawer(event: React.ChangeEvent<HTMLInputElement>){
    console.log(event.target.checked)
    setDrawer(event.target.checked);
  }

  return <div className="App overflow">
      <div className=" h-12 flex flex-row m-auto border-b">Playground</div>
      <div className="flex flex-row divide-x">
          {/*---Results---*/ }
          <div className="w-3/4">
              <Layout headerStyle={headerStyle} drawer={drawer}/>
          </div>
          {/*---Options---*/ }
          <div className="w-1/4  p-4 textLg font-bold">
              <div>
                <div>Header</div>
                <select value={headerStyle} onChange={onHeaderStyleChange} name="pets" id="pet-select">
                    <option value="">--Please choose an option--</option>
                    <option value="static">Static</option>
                    <option value="sticky top-0">Sticky</option>
                </select>
                <div>Drawer</div>
                <input type="checkbox" checked={drawer} onChange={onDrawer} />
              </div>
          </div>
      </div>
    </div>
}

function Layout({
  headerStyle,
  drawer
}:{
  headerStyle:string,
  drawer:boolean
}){

  return  <div className="relative w-full h-90v  overflow-auto">
  {/*------Header-------*/}
  <Header style={headerStyle}/>
  {/*------Body-------*/}
  <div className="flex flex-row h-full ">
       {/*------Drawer-------*/}
      {drawer?<div className={`w-72 h-auto  ${headerStyle.includes('sticky')?'fixed overflow-auto':''} bg-green-400 `}>
        <div className="py-10">Item</div>
        <div className="py-10">Item</div>
        <div className="py-10">Item</div>
        <div className="py-10">Item</div>
        <div className="py-10">Item</div>
        <div className="py-10">Item</div>
        <div className="py-10">Item</div>
        <div className="py-10">Item</div>
        <div className="py-10">Item</div>
        <div className="py-10">Item</div>
        <div className="py-10">Item</div>
        <div className="py-10">Item</div>
        <div className="py-10">Item</div>
        <div className="py-10">Item</div>
        <div className="py-10">Item</div>
        <div className="py-10">Item</div>
        <div className="py-10">Item</div>
        <div className="py-10">Item</div>

      </div>:null}
      {/*------Main-------*/}
      <div className={`h-full ${headerStyle.includes('sticky') && drawer?'ml-72':''}`}> 
          <div className="w-3/4">div</div><br />
          <div className="w-3/4">div</div><br />
          <div className="w-3/4">div</div><br />
          <div className="w-3/4">div</div><br />
          <div className="w-3/4">div</div><br />
          <div className="w-3/4">div</div><br />
          <div className="w-3/4">div</div><br />
          <div className="w-3/4">div</div><br />
          <div className="w-3/4">div</div><br />
          <div className="w-3/4">div</div><br />
          <div className="w-3/4">div</div><br />
          <div className="w-3/4">div</div><br />
          <div className="w-3/4">div</div><br />
          <div className="w-3/4">div</div><br />
          <div className="w-3/4">div</div><br />
      </div> 
      {/*------Footer-------*/}
  </div>
</div>

}
export default App;


