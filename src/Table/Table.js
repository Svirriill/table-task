import React from 'react';
import useSortableData from '../useSortableData/useSortableData';
import './Table.css';

const Table = (props) => {
    const { items, requestSort, sortConfig } = useSortableData(props.products);
    const { newItem, isOpen, clickOnAddButton } = props;

    const [id, setId] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');

    const resetForm = () => {
        setId('');
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        newItem({ id, firstName, lastName, email, phone });
        resetForm();
    };

    function handleClickOnAddButton() {
        clickOnAddButton(newItem);
    }
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    return (
        <section className="table">
            <form className="table__form" onSubmit={handleSubmit}>
                <div className="table__buttons">
                    <button className="table__button" onClick={handleClickOnAddButton}>Добавить</button>
                    <button className="table__button" type="submit">Добавить в таблицу</button>
                </div>
                <table className='table__list'>
                    <thead className='table__foot'>
                        <tr className={`table__string_inputs ${isOpen && 'table__string_inputs_opened'}`} >
                            <td><input
                                className="table__input"
                                type="number"
                                name="id"
                                placeholder="Id"
                                value={id}
                                onChange={evt => setId(evt.target.value)}
                                required /></td>
                            <td><input
                                className="table__input"
                                type="text"
                                name="firstName"
                                placeholder="FirstName"
                                value={firstName}
                                onChange={evt => setFirstName(evt.target.value)}
                                required /></td>
                            <td><input
                                className="table__input"
                                type="text"
                                name="lastName"
                                placeholder="LastName"
                                value={lastName}
                                onChange={evt => setLastName(evt.target.value)}
                                required /></td>
                            <td><input
                                className="table__input"
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={email}
                                onChange={evt => setEmail(evt.target.value)}
                                required /></td>
                            <td><input
                                className="table__input"
                                type="tel"
                                name="phone"
                                placeholder="Phone"
                                value={phone}
                                onChange={evt => setPhone(evt.target.value)}
                                required /></td>
                        </tr>
                    </thead>
                    <thead className="table__head">
                        <tr>
                            <th>
                                <button
                                    type="button"
                                    onClick={() => requestSort('id')}
                                    className={getClassNamesFor('id')}
                                >id</button>
                            </th>
                            <th>
                                <button
                                    type="button"
                                    onClick={() => requestSort('firstName')}
                                    className={getClassNamesFor('firstName')}
                                >firstName</button>
                            </th>
                            <th>
                                <button
                                    type="button"
                                    onClick={() => requestSort('lastName')}
                                    className={getClassNamesFor('lastName')}
                                >lastName</button>
                            </th>
                            <th>
                                <button
                                    type="button"
                                    onClick={() => requestSort('email')}
                                    className={getClassNamesFor('email')}
                                >email</button>
                            </th>
                            <th>
                                <button
                                    type="button"
                                    onClick={() => requestSort('phone')}
                                    className={getClassNamesFor('phone')}
                                >phone</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr           
                            key={item.id + item.phone}
                            >
                                <td>{item.id}</td>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </form>
        </section>
    );
};

export default Table;