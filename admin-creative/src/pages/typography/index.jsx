import React from "react";
import '../../assets/style/variables.scss';
import './style.scss';
import TypographySection from './section-component';
import PageContainer from "../../components/page-container";

const Typography = () => {
    return <PageContainer title={"Typography"}>
        <div className="G-section-container">
            <div className="G-page-title-part">
                <h3 className="G-page-title">Light Bootstrap Table Heading</h3>
                <p className="G-page-subTitle">Created using Montserrat Font Family</p>
            </div>
            <TypographySection
                typoTitle='Header 1'
                typoDescript='The Life of LB Dashboard'
                // color={'pink'}
                // bold={900}
                fontSize={'52px'}
            />
            <TypographySection
                typoTitle='Header 2'
                typoDescript='The Life of LB Dashboard'
                fontSize={'36px'} />
            <TypographySection
                typoTitle='Header 3'
                typoDescript='The Life of LB Dashboard'
                fontSize={'28px'} />
            <TypographySection
                typoTitle='Header 4'
                typoDescript='The Life of LB Dashboard'
                fontSize={'22px'} />
            <TypographySection
                typoTitle='Header 5'
                typoDescript='The Life of LB Dashboard'
                fontSize={'16px'} />
            <TypographySection
                typoTitle='Header 6'
                typoDescript='The Life of LB Dashboard'
                fontSize={'12px'}
                bold={600} />
            <TypographySection
                typoTitle='Paragraph'
                typoDescript='I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.'
            />
            <TypographySection
                typoTitle=''
                typoDescript='I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.'
                bold={600} />
            <TypographySection
                typoTitle='Quote'
                typoDescript='- Noaa'
                bold={600} />
            <TypographySection
                typoTitle='Muted Text'
                typoDescript='I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...'
                color={'#888888'} />
            <TypographySection
                typoTitle='Primary Text'
                typoDescript='I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...'
                color={'#4091e2'} />
            <TypographySection
                typoTitle='Info Text'
                typoDescript='I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...'
                color={'#1dc7ea'} />
            <TypographySection
                typoTitle='Success Text'
                typoDescript='I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...'
                color={'#a1e82c'} />
            <TypographySection
                typoTitle='Warning Text'
                typoDescript='I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...'
                color={'#ffbc67'} />
            <TypographySection
                typoTitle='Danger Text'
                typoDescript='I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...'
                color={'#fc727a'} />
            <TypographySection
                typoDescript='Header with small subtitle'
                fontSize={'36px'} />
            <TypographySection
                typoTitle='Small Tag'
                typoDescript='Use "small" tag for the headers'
                color={'#888888'}
            />
        </div>
    </PageContainer>
}
export default Typography