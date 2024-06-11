import { useAldoAlert } from 'aldo-alert';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HashLoader, PacmanLoader, ScaleLoader } from 'react-spinners';

const MovieList = () => {
  const { showAldoAlert } = useAldoAlert();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showModalNotes, setShowModalNotes] = useState(false);
  const [loadingPay, setLoadingPay] = useState(false);
  const [loadingInvite, setLoadingInvite] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [price, setPrice] = useState('5 ETH / $100 / 0.0001 BTC / Crypto Support Payment');
  const [seat, setSeat] = useState('');
  const [notes, setNotes] = useState('');
  const [telegramUsername, setTelegramUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Inception',
      desc: 'A thief who enters the dreams of others to steal their secrets from their subconscious.',
      trending: 'yes',
      rating: 8.8,
      showtimes: ['10:00 AM', '1:00 PM', '4:00 PM'],
      image: 'https://image.tmdb.org/t/p/w500//gKkl37BQuKTanygYQG1pyYgLVgf.jpg',

    },
    {
      id: 2,
      title: 'The Shawshank Redemption',
      desc: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      trending: 'no',
      rating: 9.3,
      showtimes: ['11:00 AM', '3:00 PM', '7:00 PM'],
      image: 'https://image.tmdb.org/t/p/w500//gAEUXC37vl1SnM7PXsHTF23I2vq.jpg',
    },
    {
      id: 3,
      title: 'The Godfather',
      desc: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      trending: 'no',
      rating: 9.2,
      showtimes: ['9:00 AM', '2:00 PM', '6:00 PM'],
      image: 'https://image.tmdb.org/t/p/w500//nP6RliHjxsz4irTKsxe8FRhKZYl.jpg',
    },
    {
      id: 4,
      title: 'The Dark Knight',
      desc: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      trending: 'yes',
      rating: 9.0,
      showtimes: ['10:30 AM', '1:30 PM', '5:30 PM'],
      image: 'https://image.tmdb.org/t/p/w500//bcM2Tl5HlsvPBnL8DKP9Ie6vU4r.jpg',
    },
    {
      id: 5,
      title: 'Pulp Fiction',
      desc: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      trending: 'no',
      rating: 8.9,
      showtimes: ['12:00 PM', '3:30 PM', '8:00 PM'],
      image: 'https://image.tmdb.org/t/p/w500//tSz1qsmSJon0rqjHBxXZmrotuse.jpg',
    },
    {
      id: 6,
      title: 'Forrest Gump',
      desc: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
      trending: 'no',
      rating: 8.8,
      showtimes: ['11:30 AM', '2:30 PM', '6:30 PM'],
      image: 'https://image.tmdb.org/t/p/w500//vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg',
    },
    {
      id: 7,
      title: 'Fight Club',
      desc: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
      trending: 'yes',
      rating: 8.8,
      showtimes: ['10:00 AM', '1:00 PM', '4:00 PM'],
      image: 'https://image.tmdb.org/t/p/w500//iADOJ8Zymht2JPMoy3R7xceZprc.jpg',
    },
    {
      id: 8,
      title: 'The Matrix',
      desc: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
      trending: 'no',
      rating: 8.7,
      showtimes: ['9:30 AM', '12:30 PM', '5:00 PM'],
      image: 'https://image.tmdb.org/t/p/w500//8htJ7keZTwa08aC9OKyiqaq1cNJ.jpg',
    },
    {
      id: 9,
      title: 'Inglourious Basterds',
      desc: 'In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner\'s vengeful plans for the same.',
      trending: 'yes',
      rating: 8.3,
      showtimes: ['11:00 AM', '3:00 PM', '7:00 PM'],
      image: 'https://image.tmdb.org/t/p/w500//kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg',
    },
    {
      id: 10,
      title: 'The Silence of the Lambs',
      desc: 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.',
      trending: 'no',
      rating: 8.6,
      showtimes: ['10:00 AM', '2:00 PM', '6:00 PM'],
      image: 'https://image.tmdb.org/t/p/w500//sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg',
    },
  ]);

  const truncateDescription = (desc) => {
    if (desc.length > 70) {
      return desc.substring(0, 70) + '...';
    }
    return desc;
  };

  const handleBuyClick = () => {
    setShowModal(true);
  };

  const generateNotes = (text) => {
    let index = 0;
    setLoading(true);
    const intervalId = setInterval(() => {
      setNotes((prevNotes) => prevNotes + text.charAt(index));
      index++;
      if (index === text.length) {
        clearInterval(intervalId);
        setLoading(false);
      }
    }, 50); // Mengatur kecepatan pengetikan
  };


  const generateWalletAI = (text) => {
    let index = 0;
    setLoading(true);
    const intervalId = setInterval(() => {
      setWalletAddress((prevNotes) => prevNotes + text.charAt(index));
      index++;
      if (index === text.length) {
        clearInterval(intervalId);
        setLoading(false);
      }
    }, 50); // Mengatur kecepatan pengetikan
  };

  const payFunction = () => {
    setLoadingPay(true);
    setTimeout(() => {
      setLoadingPay(false);
      showAldoAlert('Payment successful!', 'warning');
      setShowModalNotes(true);
    }, 2000);
  }

  const inviteFunction = () => {
    setLoadingInvite(true);
    setTimeout(() => {
      setLoadingInvite(false);
      showAldoAlert('Invite successful!', 'warning');
      // Open the link in a new tab
      window.open('https://t.me/aldoooosg?text=Heyy%2C%20I%20already%20booked%20a%20movie%20ticket%20for%20both%20of%20us.%20We%27re%20going%20to%20watch%20it%20together%21', '_blank');
      setShowModal(false); // Close the modal
      setShowModalNotes(false); // Close the modal
    }, 2000);
  }

  const handleClose = () => {
    setShowModal(false);
    setShowModalNotes(false);
  }





  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-red-400">Movies</h1>
      <ul className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        {movies.map((movie) => (
          <li key={movie.id} className="border-b border-gray-200 py-2 shadow-md rounded-md p-2
          flex flex-col gap-2 text-left">
            <img src={movie.image} alt={movie.title} className="w-full h-auto mb-2" />
            <p className="text-lg font-semibold">{movie.title}</p>
            <p className="text-gray-500">{truncateDescription(movie.desc)}</p>
            <p className={`w-fit text-white p-2 rounded-full px-5 flex justify-center items-center ${movie.trending === 'yes' ? 'text-black bg-blue-400' : 'bg-red-400 text-white'}`}>Trending: {movie.trending}</p>
            <p className="text-gray-500"> <span className='font-bold'>Rating:</span> {movie.rating} ⭐</p>
            <p className="text-gray-500"><span className='font-bold'>Showtimes:</span> {movie.showtimes.join(' - ')}</p>
            <button onClick={handleBuyClick} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-transform hover:transform hover:-translate-y-1 duration-300">Buy</button>
          </li>
        ))}
      </ul>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-md shadow-lg w-10/12 h-4/5 overflow-y-auto">
            <div >
              <h2 className="text-2xl font-semibold mb-4">Purchase</h2>
              <div className="mb-4 text-left">
                <label htmlFor="walletAddress" className="block text-gray-700 font-semibold mb-1">TON Wallet Address:</label>
                <input type="text" id="walletAddress" value={walletAddress} onChange={(e) => setWalletAddress(e.target.value)} className="block w-full border border-black rounded-md p-2" />
                <button onClick={() => generateWalletAI(" 0:16cc429c767ca4bd77d4368baa752eb6b6fae9df66c2c6e292e9e42b4ba21281")} className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md mt-2 w-[180px] h-[50px] flex justify-center items-center mb-3">
                  {loading ? <ScaleLoader color='#ffffff' /> : "Generate AI"}
                </button>
              </div>
              <div className="mb-4 text-left">
                <label htmlFor="walletAddress" className="block text-gray-700 font-semibold mb-1">Price: 7 TON Coins</label>
                {/* <p className="text-red-700 text-sm">The price can only be paid using TON Coin.</p> */}
              </div>


              <div className="mb-4 text-left">
                <label htmlFor="telegramUsername" className="block text-gray-700 font-semibold mb-1">Amount of Tickets:</label>
                <input type="number" id="telegramUsername" value={seat} onChange={(e) => setSeat(e.target.value)} className="block w-full border border-black rounded-md p-2" />
              </div>
              <div className="flex justify-end">
                
                <button
                  onClick={payFunction}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out mr-2"
                >
                  {loadingPay ? <ScaleLoader color='#ffffff' /> : "Pay Ticket"}
                </button>

                <button onClick={() => setShowModal(false)} className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-md transition duration-300 ease-in-out">Cancel</button>
              </div>




            </div>
          </div>
        </div>
      )}
      {showModalNotes && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className={`bg-white p-8 rounded-md shadow-lg w-10/12 h-4/5 overflow-y-auto transition-transform duration-300 ${showModal && 'scale-100'}`}>
            <div >
              <h2 className="text-2xl font-semibold mb-4">Ask your partner to come!</h2>
              <div className="mb-4 text-left">
                <label htmlFor="notes" className="block text-gray-700 font-semibold mb-1">Notes:</label>
                <textarea id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} className="block w-full border border-black rounded-md p-2" rows="4"></textarea>
                <button onClick={() => generateNotes(" Heyy, I already booked a movie ticket for both of us. We're going to watch it together!")} className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md mt-2
              w-[180px] h-[50px] flex justify-center items-center">
                  {loading ? <ScaleLoader color='#ffffff' /> : "Generate Notes"}

                </button>
              </div>
              <div className="mb-4 text-left">
                <label htmlFor="telegramUsername" className="block text-gray-700 font-semibold mb-1">Telegram Username:</label>
                <input type="text" id="telegramUsername" value={telegramUsername} onChange={(e) => setTelegramUsername(e.target.value)} className="block w-full border border-black rounded-md p-2" />
              </div>
              <div className="flex justify-end">
                <button
                  className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out mr-2"
                  onClick={inviteFunction}
                >
                  {loadingInvite ? <ScaleLoader color='#ffffff' /> : "Send Invitation"}
                </button>

                <button onClick={handleClose} className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-md transition duration-300 ease-in-out">Exit</button>
              </div>




            </div>
          </div>
        </div>
      )}


    </div>
  );
};

export default MovieList;