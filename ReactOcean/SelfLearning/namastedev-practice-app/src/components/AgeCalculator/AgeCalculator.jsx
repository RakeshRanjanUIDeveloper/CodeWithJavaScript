import React, { useState } from 'react';
import './AgeCalculator.css';

const AgeCalculator = () => {
    const [birthDate, setBirthDate] = useState('');
    const [age, setAge] = useState(null);
    const [error, setError] = useState('');

    const handleDateChange = (e) => {
        setBirthDate(e.target.value);
        setError('');
        setAge(null);
    };

    const handleCalculate = () => {
        if (!birthDate) {
            setError('Please select a date');
            setAge(null);
            return;
        }

        const today = new Date();
        const birth = new Date(birthDate);

        if (birth > today) {
            setError('Birthdate cannot be in the future');
            setAge(null);
            return;
        }

        let years = today.getFullYear() - birth.getFullYear();
        let months = today.getMonth() - birth.getMonth();
        let days = today.getDate() - birth.getDate();

        if (days < 0) {
            months -= 1;
            const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            days += prevMonth.getDate();
        }

        if (months < 0) {
            years -= 1;
            months += 12;
        }

        setAge({ years, months, days });
        setError('');
    };

    return (
        <div className="age-container">
            <h2 className="title">Age Calculator</h2>

            <label htmlFor="birthdate" data-testid="label-birthdate" className="label">
                Enter/Select a birthdate
            </label>

            <input
                type="date"
                id="birthdate"
                className="input-date"
                data-testid="input-birthdate"
                placeholder="dd-mm-yyyy"
                value={birthDate}
                onChange={handleDateChange}
            />

            <button
                className="btn-calc"
                data-testid="btn-calculate"
                onClick={handleCalculate}
            >
                Calculate Age
            </button>

            {error && (
                <p className="error-msg" data-testid="error-msg">
                    {error}
                </p>
            )}

            {age && (
                <p className="age-result" data-testid="age-result">
                    {age.years} years, {age.months} months, {age.days} days
                </p>
            )}
        </div>
    );
};

export default AgeCalculator;
