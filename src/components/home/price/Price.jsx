import React from "react"
import { price } from "../../assets/data/data"
import { Heading } from "../../common/Heading"

export const Price = () => {
  return (
    <>
      <section className='price'>
        <Heading title='Go Mechanic' desc='Now Mechanic Friendly Business to make you as our partners!' />

        <div className='content'>
          {price.map((item) => (
            <div className='box' key={item.id}>
              <h3>{item.name}</h3>
              <h1>
                <span>₹</span>
                {item.price}
                <label htmlFor=''>/user per month</label>
              </h1>
              <p>{item.desc}</p>
              <button className='button'>Join the family</button>

              <ul>
                {item.list.map((lists) => (
                  <li>
                    <i>{lists.icon}</i>
                    <span>{lists.para}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
