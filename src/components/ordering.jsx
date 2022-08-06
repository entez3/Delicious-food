import React from 'react'

const Ordering = () => {
    return (
        <>
            <h3 className="section-title">ordering</h3>
            <section className="oreding-box">
                <div className="left">
                    <h4>order esily!</h4>
                    <h4 className="right-title">branch</h4>
                    <h6>
                        France<span class="parantes">(</span>Paris
                        <span class="parantes">)</span>
                    </h6>
                    <h6>
                        German<span class="parantes">(</span>Berlin
                        <span class="parantes">)</span>
                    </h6>
                    <h6>
                        Canada<span class="parantes">(</span>Torento
                        <span class="parantes">)</span>
                    </h6>
                    <h6 class="right-titel banner">
                        You just can find any delicious here Your food will reach you
                        quickly
                    </h6>
                </div>
                <div className="right">
                    <h3 className="right-titel">tell:</h3>
                    <h4>659-743-152</h4>
                    <h3 className="right-titel">Email:</h3>
                    <h4>info@gmail.com</h4>
                    <section className="right-box">
                        <img src="/pic/11.jpg" alt="ordering" />
                        <img src="/pic/01.jpg" alt="ordering" />
                        <img src="/pic/19.jpg" alt="ordering" />
                    </section>
                </div>
            </section>
        </>
    )
}

export default Ordering