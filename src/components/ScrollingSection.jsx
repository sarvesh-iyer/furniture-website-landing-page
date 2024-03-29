import React from 'react'
import { InfiniteLooper } from './InfiniteLooper'
import { loopingItemList } from '../data/loopingItemsList'

export const ScrollingSection = () => {

    return (
        <section className="looping-section">
            <h2 className='title'>Why Choose us</h2>
            <div className="looping-div">
                <InfiniteLooper direction="left" speed="9" >
                    {loopingItemList?.map(item => {
                        return (
                            <div key={item.id}>
                                <img src={item.img} alt="" />
                            </div>
                        )
                    })}
                </InfiniteLooper>
            </div>
        </section>
    )
}