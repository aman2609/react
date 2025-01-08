const OfflineComponent = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px', textColor: '#f8d7da', color: '#721c24', height:'100%', width:'100%' }}>
          <h1>You're Offline</h1>
          <h3>It looks like you're not connected to the internet. Please check your connection to continue using Tasty Trek.</h3>
          <h2>Meanwhile, here's some info about us:</h2>
          <h4>
            <p>Delicious meals delivered to your doorstep</p>
            <p>Wide variety of cuisines</p>
            <p>Fast and reliable service</p>
          </h4>
        </div>
    )
}
export default OfflineComponent