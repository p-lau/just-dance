import React, {CSSProperties} from "react"
import {FixedSizeList as List} from 'react-window'
import AutoSizer from "react-virtualized-auto-sizer"
import {CATALOG, fontSize} from '../../constants'

type RowProps = {
    index: number,
    style: CSSProperties,
}

const Row = ({ index, style}: RowProps) => {
    const song = CATALOG[index]

    return(
        <div style={style} className={'row'}>
            <div className={'img'}><img src={song.ref} alt={`Song profile for ${song.name}`}/></div>
            <div className={'description'}>{song.name }</div>

        </div>)
}

export const Catalog = () =>
    <div style={{width: '100%'}} className={'catalog'}>
        <AutoSizer>
            {
                ({height, width}) =>
                    <List
                        className={'list'}
                        height={height}
                        itemCount={CATALOG.length}
                        itemSize={fontSize * 7}
                        width={width}
                    >
                        {Row}
                    </List>
            }
        </AutoSizer>
    </div>