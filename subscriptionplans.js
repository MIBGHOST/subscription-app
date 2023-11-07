import { useState, useEffect } from 'react';

const SubscriptionPlans = () => {
  const [plans, setPlans] = useState([]);

  // Fetch subscription plans from your server (adjust the API endpoint)
  useEffect(() => {
    fetch('/api/plans') // Replace with the correct API endpoint
      .then((response) => response.json())
      .then((data) => {
        setPlans(data);
      })
      .catch((error) => {
        console.error('Error fetching plans:', error);
      });
  }, []);

  return (
    <div>
      <h2>Available Subscription Plans</h2>
      <ul>
        {plans.map((plan) => (
          <li key={plan._id}>
            <h3>{plan.name}</h3>
            <p>Price: ${plan.price} per {plan.interval}</p>
            {/* Add more plan details here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubscriptionPlans;

