import React,{useState} from 'react'

const Contact = () => {
    const [error,setError] = useState(false);
    const [input,setInput] = useState('');
    const checkEmail = (input) => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;      
        if(!regex.test(input.trim())){
            setError(!error);
        }else{
            return
        };
    }
    const handleChange = e => {
        setInput(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
        checkEmail(input);
    }
    return (
        <div className='relative z-10  mt-[150px] container h-[30vh] px-5 md:grid md:place-content-center md:translate-y-[120px]'>
            <div className='bg-darkblue-100 flex flex-col items-center shadow-2xl px-4 py-12 rounded-md md:px-[150px] md:py-[50px]'>
                <h4 className='text-center md:text-3xl'>Get early access today</h4>
                <p className='mt-5 text-center md:max-w-[800px]'>It only takes a minute to sign up and our free starter tier is extremely generous. If your any quations, our support team would be happy to help you</p>
                <form className='relative w-full mt-5 flex flex-col gap-7 md:flex-row '>
                    <input 
                        className=' px-5 py-3 rounded-3xl md:flex-1 '
                        type="text" 
                        placeholder='email@excample.com'
                        value={input}
                        onChange={handleChange}
                        required
                    />
                    <button onClick={handleSubmit} className='button px-5 py-3'>Get Start For Free </button>
                    <small className={`${error ? 'block':'hidden'} absolute top-12 left-5 md:-bottom-5 md:left-5 text-error`}>Please enter a valid email address</small>
                </form>
            </div>
        </div>
    )
}

export default Contact