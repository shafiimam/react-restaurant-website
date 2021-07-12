import React, { useState } from 'react';
import Item from '../Components/Item/Item';
import Nav from '../Components/Nav/Nav';
import { Container, WrapperDiv } from '../Components/Styles/Container.styles';
import data from "../Components/Item/data";
import Catagory from "../Components/card/catagory"


const Menupage = () => {
    const [activeMenu,setActiveMenu]=useState("");
    const [loadMenu,setMenu]=useState("")

    const handleActiveMenu=(item)=>{
        setActiveMenu(item);
        let res=data.find(data=>{
            if(data._id===item){
                return data
            }
        })
        console.log(res.menu)
        setMenu(res.menu);
    }
    return (
        <div>
            <Nav/>

            <Container>
                <div className="grid-4">
                        {data.map((item)=>{
                        return(<Catagory data={item} fn={handleActiveMenu} activeMenu={activeMenu}/>)
                    })}
                </div>
                <div>
                    {(loadMenu?<>
                        {loadMenu.map(item=>{
                            return(<div>
                                {item.name}
                            </div>)
                        })}
                    </>:null)}
                </div>

            
            </Container>
        </div>
    );
};

export default Menupage;