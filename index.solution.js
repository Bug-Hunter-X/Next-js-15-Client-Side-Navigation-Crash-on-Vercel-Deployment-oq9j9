```javascript
// pages/index.js
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/hello');
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      {data ? <p>Server response: {data.message}</p> : <p>Loading...</p>}
    </div>
  );
}
```
```javascript
//pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from the server!' });
}
```