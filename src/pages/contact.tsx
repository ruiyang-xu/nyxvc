
const ContactInfo = () => {
    const email = 'research@nyxvc.com'
    return (
        <div className="card  flex p-4 justify-center items-center">
            <div className="card-body flex p-4 justify-center items-center">
                <h2 className="card-title text-3xl">CONTACT US</h2>
                <div className='flex items-center justify-center pt-4'>
                    <hr className=" bg-neutral h-0.5 border-none w-[90vw]"></hr>
                </div>
                <div className="flex min-h-[70vh] justify-center items-center">
                    {/* <svg className="w-6 h-6 text-blue-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M16.24 7.76a6 6 0 00-8.48 0l-1.06 1.06a6 6 0 000 8.48l1.06 1.06a6 6 0 008.48 0l1.06-1.06a6 6 0 000-8.48l-1.06-1.06z"></path>
                        <path d="M14.34 14.34a2 2 0 01-2.83 0l-2.83-2.83a2 2 0 010-2.83l.71-.71a2 2 0 012.83 0l2.83 2.83a2 2 0 010 2.83l-.71.71z"></path>
                        <path d="M7 7l.01-.01"></path>
                        <path d="M7 7l-.01.01"></path>
                    </svg> */}
                    <a href={`mailto:${email}`} className="text-blue-500 text-3xl pl-2">{email}</a>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
