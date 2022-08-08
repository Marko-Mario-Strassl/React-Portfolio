import React , { useState } from 'react';
import styled from 'styled-components';
import Title from './../components/Title';
import { InnerLayout } from './../styles/Layouts';
import Portfolio from './../data/Portfolio';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from './../components/Button';

const allButtons = ['All', ...new Set(Portfolio.map(item=>item.category))]

function PortfolioPage() {
    const [menuItem, setMenuItems] = useState(Portfolio);
    const [button] = useState(allButtons);

    const filter = (button) => {
        if(button === 'All'){
            setMenuItems(Portfolio);
            return;
        }
        const filteredData = Portfolio.filter(item => item.category === button);
        setMenuItems(filteredData);
    }

    return (
        <PortfolioPageStyled>
            <Title title={'Portfolios'} span={''} />
            <InnerLayout>
            <Button filter={filter} button={button} />
                <div className="menu">
                    {
                        menuItem.map((item) => {
                            return <div className="portfolio-item" key={item.id}>
                                <div className="portfolio-content">
                                    <div className="portfolio-image">
                                        <img src={item.image} alt="" />
                                        <ul>
                                            <li><a href={item.link}> <GitHubIcon /> </a></li>
                                            
                                        </ul>
                                    </div>
                                    <h6>{item.title}</h6>
                                    <p>{item.subTitle}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </InnerLayout>
        </PortfolioPageStyled>
    )
}

const PortfolioPageStyled = styled.div`
   .menu{
        display:grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap:3rem;
        @media screen and (max-width:920px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:670px){
            grid-template-columns: repeat(1, 1fr);
        }

        .portfolio-item{
            .portfolio-content{
                display:block;
                position: relative;
                overflow:hidden;
                h6{
                    font-size:1.4rem;
                    margin:.2rem 0;
                }
                img{
                    width:100%;
                    height:100%;
                    object-fit:cover;
                }
                ul{
                    display:none;
                    transform: translateY(-600px);
                    transition: all .4s ease-in-out;
                    position: absolute;
                    left:50%;
                    top:40%;
                    opacity: 1;
                    li{
                        background: var(--border-color);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 1rem;
                        border-radius: 50%;
                        width: 3rem;             
                        height:3rem;
                        margin: 0 0.5rem;
                        transition: all .4s ease-in-out;
                        &:hover{
                            background: var(--primary-color);
                        }
                        a{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            transition: all .4s ease-in-out;
                        }
                    }
                }
                .portfolio-image{
                    &::before{
                        content: '';
                        position: absolute;
                        left: 2%;
                        top:4%;
                        height:0;
                        width:0;
                        transition: all .4s ease-in-out;
                    }
                }
                .portfolio-image:hover{
                    ul{
                        transform: translateY(0);
                        transform: translate(-50%, -50%);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: all .4s ease-in-out;
                        li{
                            transition: all .4s ease-in-out;
                            &:hover{
                                background: var(--primary-color);
                            }
                            a{
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                transition: all .4s ease-in-out;
                            }
                        }
                        li:hover{
                            svg{
                                color:var(--font-color);
                            }
                        }
                        svg{
                            font-size:2rem;
                        }
                    }
                    &::before{
                        height:calc(100% - 28%);
                        width:calc(100% - 4%);
                        
                        opacity: 0.9;
                        transform-origin:left;
                        transition: all .4s ease-in-out;
                    }
                }
            }
        }
   }

`;

export default PortfolioPage;
