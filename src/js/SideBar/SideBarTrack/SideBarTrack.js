import React, {useContext} from "react";
import styled from "styled-components";
import {TrackContext} from "../../context";

import './sideBarTrack.scss'

const SideBarTrackStyled = styled.div`
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 5px;
  border-radius: 10px;
  margin: 6px;
  transition: all 0.7s;
`
// background-color: rgba(255, 255, 255, 0.11);

const TrackCoverWrapper = styled.div`
  width: 100px;
  height: 100px;
`

const TrackCover = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit:cover;
`

const TrackData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 10px;
  color: white;
`

export default function SideBarTrack({ ...props }) {
    const [, setTrack] = useContext(TrackContext)
    console.log(props.active)

    return(
        <SideBarTrackStyled
            className={ props.active ? 'active' : null }
            onClick={() => setTrack(props.props)}
        >
            <TrackCoverWrapper>
                <TrackCover src={props.props.attributes.image_url}/>
            </TrackCoverWrapper>

            <TrackData>
                <p>{props.props.attributes.title}</p>
                <p>{props.props.attributes.author}</p>
            </TrackData>
        </SideBarTrackStyled>
    )
}
