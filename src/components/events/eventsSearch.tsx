import React, { FC, useRef } from "react"
import Button from "../ui/button"
import styles from './eventsSearch.module.css'
interface Props {
    onSearch : (a: string, b: string) => void
}
const EventsSearch: FC<Props> = (props) => {
    const yearRef = useRef<HTMLSelectElement>(null)
    const montRef = useRef<HTMLSelectElement>(null) 
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault()

       const selectedYear = yearRef.current?.value!
       const selectedMonth = montRef.current?.value!
       props.onSearch(selectedYear,selectedMonth)
    }
    return <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.controls}>

        <div className={styles.control}>
            <label htmlFor="year">Year</label>
            <select id='year' ref={yearRef}>
                <option value='2021'>2021</option>
                <option value='2022'>2022</option>
            </select>
        </div>
        <div className={styles.control}>
            <label htmlFor="month">Month</label>
            <select id='month' ref={montRef}>
                <option value='1'>January</option>
                <option value='2'>Febuary</option>
                <option value='3'>March</option>
                <option value='4'>April</option>
                <option value='5'>May</option>
                <option value='6'>June</option>
                <option value='7'>July</option>
                <option value='8'>August</option>
                <option value='9'>September</option>
                <option value='10'>October</option>
                <option value='11'>November</option>
                <option value='12'>December</option>
            </select>
            </div>
        </div>
        <Button onClick={() => {}}> Find Event</Button>
    </form>
}

export default EventsSearch