import React from 'react';
import styled from 'styled-components';
import Title from './../components/Title';
import { InnerLayout } from './../styles/Layouts';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from './../components/ResumeItem';
import SkillsItem from './../components/SkillsItem';
import ResumeItemLink from './../components/ResumeItemLink';

function ResumePage() {
    return (
        <ResumePageStyled>
            {/* Resume Section Start Here */}
            <Title title={'Lebenslauf'} span={''} />
            <InnerLayout className="resumeSection">
                <div className="education">
                    <h4><SchoolIcon /><span>Ausbildung</span></h4>
                    <ResumeItem year={'08/2008 – 07/2013'} title={'Unterstufe'} subTitle={'Primarschule Altenburg, Wettingen'} text={''} />
                    <ResumeItem year={'08/2013 – 07/2018'} title={'Oberstufe'} subTitle={'Bezirksschule, Wettingen'} text={''} />
                    <ResumeItem year={'08/2018 – 06/2021'} title={'Mittelschule'} subTitle={'Informatikmittelschule, Baden'} text={'Schulischer Teil: Kantonsschule Baden, Berufsmaturität Typ Wirtschaft | Berufsfachschule BBB Baden, Applikationsentwickler EFZ'} />
                    <ResumeItem year={'06/2021 - heute'} title={'Arbeitssuchend'} subTitle={'Praxisjahr'} text={'Den schulischen Teil der Informatikmittelschule habe ich bestanden. Für das eidgenössischen Fähigkeitszeugnis EFZ bin ich seit 2021 auf der Suche nach einem einjährigen Praktikumsplatz als Softwareentwickler.'} />

                </div>
                <div className="experience">
                    <h4> <BusinessCenterIcon /><span>Erfahrungen</span></h4>

                    <ResumeItemLink year={'06/2022'} title={'Zertifikat'} subTitle={'Developing Cloud Applications with Node.js and React'} text={'Aufgrund meiner Vorliebe zu der Programmiersprache React.JS habe ich einen anerkannten Kurs von IBM absolviert und ein Zertifikat erhalten.'} />
                    <ResumeItem year={'04/2021 – heute'} title={'Kailua GmbH'} subTitle={'Nordportal Eventhalle, Baden'} text={'Seit 2021 arbeite ich an den Wochenenden und teils unter der Woche als Allrounder im Nordportal Baden.'} />
                </div>
            </InnerLayout>
            {/* Resume Section End Here */}

            {/* Skills Section Start Here */}
            <div className="my-skills">
                <Title title={'Meine'} span={'Skills'} />
                <InnerLayout>
                    <div className="skills">
                        <SkillsItem title={'HTML5'} width={'90%'} text={'90%'} />
                        <SkillsItem title={'CSS3'} width={'80%'} text={'80%'} />
                        <SkillsItem title={'JAVASCRIPT'} width={'70%'} text={'70%'} />
                        <SkillsItem title={'BOOTSTRAP'} width={'65%'} text={'65%'} />
                        <SkillsItem title={'REACT.JS'} width={'85%'} text={'85%'} />
                        <SkillsItem title={'NODE.JS'} width={'75%'} text={'75%'} />
                        <SkillsItem title={'EXPRESS.JS'} width={'50%'} text={'50%'} />
                        <SkillsItem title={'REACT NATIVE'} width={'60%'} text={'60%'} />
                        <SkillsItem title={'JAVA'} width={'50%'} text={'50%'} />
                        <SkillsItem title={'SASS'} width={'80%'} text={'80%'} />
                        <SkillsItem title={'MATERIAL UI'} width={'85%'} text={'85%'} />
                    </div>
                </InnerLayout>
            </div>
            {/* Skills Section End Here */}
        </ResumePageStyled>
    )
}

const ResumePageStyled = styled.div`
    .resumeSection{
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap:3rem;
        @media screen and (max-width:992px){
            grid-template-columns: repeat(1, 1fr);
        }
        .education, .experience{
            h4{
                padding: 1rem 0;
                font-size:1.8rem;
                @media screen and (max-width:600px){
                    font-size:1.5rem;
                }
                span{
                    margin-left:.5rem;
                }
            }
            svg{
                color:var(--primary-color);
                font-size:1.8rem;
            }
        }
    }

    .skills{
        display: grid;
        grid-template-columns:repeat(2, 1fr); 
        grid-gap:1.5rem;
        margin-top: 5rem;
        @media screen and (max-width:768px){
            grid-template-columns:repeat(1, 1fr); 
        }
    }
`;

export default ResumePage;
