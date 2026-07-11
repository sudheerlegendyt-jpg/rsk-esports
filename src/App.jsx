import React, { useState } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  // Live Customizable Application States
  const [siteSettings, setSiteSettings] = useState({
    tagline: "Play Beyond Limits",
    discordLink: "https://discord.gg",
    whatsappLink: "https://wa.me",
    livePrizePool: "₹5,000,000",
    bannerTitle: "BGMI Pro League: Season 4"
  });

  const [tournaments, setTournaments] = useState([
    { id: 1, title: "BGMI Ultimate Showdown", status: "Upcoming", fee: "Free", pool: "₹2,50,000" },
    { id: 2, title: "Valorant Neon Masters", status: "Ongoing", fee: "₹50/Player", pool: "₹1,00,000" },
    { id: 3, title: "Free Fire Clash Clash", status: "Completed", fee: "Free", pool: "₹50,000" }
  ]);

  const [leaderboard, setLeaderboard] = useState([
    { rank: 1, name: "GodLike Esports", matches: 6, wwcd: 3, kills: 48, points: 96 },
    { rank: 2, name: "Team Soul", matches: 6, wwcd: 1, kills: 52, points: 88 },
    { rank: 3, name: "RSK Official", matches: 6, wwcd: 2, kills: 38, points: 74 },
  ]);

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminUsername === 'admin' && adminPassword === 'rsk123') {
      setIsAdminLoggedIn(true);
    } else {
      alert('Galat ID ya Password!');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#0a0a0c] text-white font-sans">
      
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-[#121216]/90 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <div className="cursor-pointer font-black text-2xl tracking-wider" onClick={() => setCurrentPage('Home')}>
          RSK <span className="text-[#ff003c]">ESPORTS</span>
        </div>
        <div className="hidden md:flex gap-6 text-xs font-bold uppercase tracking-wider">
          {['Home', 'Tournaments', 'Leaderboard', 'Admin Panel'].map((item) => (
            <button key={item} onClick={() => setCurrentPage(item)} className={`hover:text-[#ff003c] transition ${currentPage === item ? 'text-[#ff003c]' : 'text-gray-400'}`}>{item}</button>
          ))}
        </div>
        <a href={siteSettings.discordLink} target="_blank" rel="noreferrer" className="bg-[#ff003c] font-black px-4 py-2 rounded text-xs uppercase shadow-[0_0_10px_rgba(255,0,60,0.4)]">Join Discord</a>
      </nav>

      {/* Pages Router */}
      <main className="flex-grow">
        {currentPage === 'Home' && (
          <div>
            <section className="min-h-[70vh] flex flex-col justify-center items-center text-center px-6 bg-[radial-gradient(circle_at_center,rgba(255,0,60,0.15)_0%,transparent_60%)]">
              <h2 className="text-xs font-bold tracking-[0.4em] text-[#ff003c] uppercase mb-2">{siteSettings.tagline}</h2>
              <h1 className="text-5xl md:text-7xl font-black uppercase mb-6">RSK <span className="text-[#ff003c]">ESPORTS</span></h1>
              <button onClick={() => setCurrentPage('Tournaments')} className="bg-[#ff003c] font-black px-6 py-3 uppercase tracking-widest text-sm shadow-[0_0_15px_rgba(255,0,60,0.5)]">Register Now</button>
            </section>

            <section className="max-w-4xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
              <div className="bg-[#121216] border border-[#ff003c]/20 p-6 rounded-xl relative">
                <span className="absolute top-0 right-0 bg-[#ff003c] text-[9px] font-bold px-3 py-1 uppercase">Live</span>
                <h3 className="text-xl font-black uppercase mb-2">{siteSettings.bannerTitle}</h3>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <span className="text-xs text-gray-500 uppercase block">Prize Pool</span>
                  <span className="text-2xl font-black text-[#ff003c]">{siteSettings.livePrizePool}</span>
                </div>
              </div>
              <div className="flex flex-col justify-center"><h2 className="text-2xl font-black uppercase mb-2">Tournament Platform</h2><p className="text-gray-400 text-sm">Professional esports management framework with absolute direct state infrastructure sync.</p></div>
            </section>
          </div>
        )}

        {currentPage === 'Tournaments' && (
          <div className="max-w-4xl mx-auto px-6 py-12 space-y-6">
            <h2 className="text-3xl font-black uppercase text-center">Active <span className="text-[#ff003c]">Tournaments</span></h2>
            <div className="grid gap-4">
              {tournaments.map((t) => (
                <div key={t.id} className="bg-[#121216] p-5 rounded-xl border border-white/5 flex flex-wrap items-center justify-between gap-4">
                  <div><span className="bg-[#ff003c] text-[9px] font-black px-2 py-0.5 rounded uppercase">{t.status}</span><h3 className="text-lg font-bold uppercase mt-1">{t.title}</h3></div>
                  <div className="flex gap-6 text-sm"><div><span className="text-gray-500 text-[10px] block">Pool</span><span className="font-bold text-[#ff003c]">{t.pool}</span></div><div><span className="text-gray-500 text-[10px] block">Fee</span><span className="font-bold">{t.fee}</span></div></div>
                  <button className="bg-white text-black font-bold text-xs px-4 py-2 uppercase">Register</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentPage === 'Leaderboard' && (
          <div className="max-w-4xl mx-auto px-6 py-12 space-y-6">
            <h2 className="text-3xl font-black uppercase text-center">Live <span className="text-[#ff003c]">Standings</span></h2>
            <div className="bg-[#121216] border border-white/10 rounded-xl p-4 overflow-x-auto">
              <table className="w-full text-left min-w-[400px]">
                <thead><tr className="border-b border-white/10 text-gray-500 text-xs font-bold"><th className="p-2">Rank</th><th className="p-2">Team</th><th className="p-2">Matches</th><th className="p-2">Points</th></tr></thead>
                <tbody className="text-sm font-semibold divide-y divide-white/5">
                  {leaderboard.map((team, idx) => (
                    <tr key={idx} className="hover:bg-white/5"><td className="p-2 text-[#ff003c]">#{idx+1}</td><td className="p-2 font-bold uppercase">{team.name}</td><td className="p-2 text-gray-400">{team.matches}</td><td className="p-2 text-[#ff003c] font-black">{team.points}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {currentPage === 'Admin Panel' && (
          <div className="max-w-2xl mx-auto px-6 py-12">
            {!isAdminLoggedIn ? (
              <form onSubmit={handleAdminLogin} className="p-6 bg-[#121216] border border-[#ff003c]/20 rounded-xl space-y-4">
                <h3 className="text-lg font-black uppercase text-center">Admin <span className="text-[#ff003c]">Portal</span></h3>
                <input type="text" placeholder="Username (admin)" value={adminUsername} onChange={(e) => setAdminUsername(e.target.value)} className="w-full bg-white/5 border border-white/10 p-3 rounded text-sm text-white" required />
                <input type="password" placeholder="Password (rsk123)" value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} className="w-full bg-white/5 border border-white/10 p-3 rounded text-sm text-white" required />
                <button type="submit" className="w-full bg-[#ff003c] text-white py-3 font-bold text-xs uppercase tracking-wider rounded">Login</button>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-2"><h2 className="text-xl font-black uppercase">Control Panel</h2><button onClick={() => setIsAdminLoggedIn(false)} className="bg-gray-800 text-xs px-2 py-1 rounded">Logout</button></div>
                <div className="bg-[#121216] p-4 rounded-xl border border-white/5 space-y-4">
                  <h3 className="font-bold text-xs uppercase text-[#ff003c]">Update Metadata Settings</h3>
                  <div className="space-y-2">
                    <input type="text" value={siteSettings.tagline} onChange={(e) => setSiteSettings({...siteSettings, tagline: e.target.value})} className="w-full bg-white/5 border border-white/10 p-2 rounded text-xs" placeholder="Tagline" />
                    <input type="text" value={siteSettings.bannerTitle} onChange={(e) => setSiteSettings({...siteSettings, bannerTitle: e.target.value})} className="w-full bg-white/5 border border-white/10 p-2 rounded text-xs" placeholder="Banner Title" />
                    <input type="text" value={siteSettings.livePrizePool} onChange={(e) => setSiteSettings({...siteSettings, livePrizePool: e.target.value})} className="w-full bg-white/5 border border-white/10 p-2 rounded text-xs" placeholder="Prize Pool" />
                  </div>
                  <p className="text-green-500 text-[10px] font-bold">✨ Changes automatic system me save ho chuke hain!</p>
                </div>
                <div className="bg-[#121216] p-4 rounded-xl border border-white/5">
                  <h3 className="font-bold text-xs uppercase text-[#ff003c] mb-2">Add New Tournament Card</h3>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    const fd = new FormData(e.target);
                    setTournaments([...tournaments, { id: Date.now(), title: fd.get('title'), pool: fd.get('pool'), fee: fd.get('fee'), status: 'Upcoming' }]);
                    e.target.reset();
                    alert('Tournament published live!');
                  }} className="space-y-2">
