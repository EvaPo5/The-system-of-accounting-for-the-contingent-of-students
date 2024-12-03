import './Main.css';

const styles = {
    button: {
    backgroundColor:  'rgb(255, 255, 255)',
    textAlign: 'center',
    width: '500px',
    height: '50px',
    border: 'none',
    borderRadius: '10px',
    margin: '50px 875px',
    fontSize: '1.8em',

    
}
};

function Main(){
    return(
        <main>
            <div className='con'>
            <h1>Система учета контингента обучающихся </h1>
            <div className='con1'>Войти как</div>
            <button style={styles.button}>Администратор</button>
            <button style={styles.button}>Оператор</button>
            <button style={styles.button}>Преподаватель</button> 
            
            </div>
            
        </main>

    );
}
export default Main;