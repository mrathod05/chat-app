import Head from "next/head";

export default function WhatsAppWeb() {
  return (
    <div className="flex h-screen bg-gray-800 text-white">
      <Head>
        <title>WhatsApp Web UI</title>
      </Head>

      {/* Vertical Sidebar */}
      <div className="w-16 bg-gray-900 flex flex-col justify-between items-center py-4">
        <div className="space-y-4">
          <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center relative">
            <span className="absolute text-xs bg-green-500 text-white rounded-full px-2 top-0 right-0">
              141
            </span>
          </div>
          <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
          <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
          <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
          <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
        </div>

        <div className="space-y-4">
          <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
          <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
        </div>
      </div>

      {/* Sidebar */}
      <aside className="w-1/3 bg-gray-900 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
          <div className="flex space-x-4">
            <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
            <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="p-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 rounded bg-gray-800 text-gray-400 focus:outline-none"
          />
        </div>

        {/* Filters */}
        <div className="flex justify-around border-b border-gray-700 p-2">
          <button className="text-green-500">All</button>
          <button>Unread</button>
          <button>Favorites</button>
          <button>Groups</button>
        </div>

        {/* Chats List */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 flex items-center hover:bg-gray-800 cursor-pointer">
            <div className="w-10 h-10 bg-gray-700 rounded-full mr-4"></div>
            <div className="flex-1">
              <h3 className="text-sm font-bold">Mummy 🌍❤️</h3>
              <p className="text-xs text-gray-400">
                https://www.geeksforgeeks.org/c-projects/
              </p>
            </div>
            <span className="text-xs text-gray-400">12:12 PM</span>
          </div>

          <div className="p-4 flex items-center hover:bg-gray-800 cursor-pointer">
            <div className="w-10 h-10 bg-gray-700 rounded-full mr-4"></div>
            <div className="flex-1">
              <h3 className="text-sm font-bold">CRED</h3>
              <p className="text-xs text-gray-400">
                Payment for your SBI credit card XXXX-1725 is...
              </p>
            </div>
            <span className="text-xs text-gray-400">12:07 PM</span>
          </div>

          {/* Add more chat items as needed */}
        </div>
      </aside>

      {/* Chat Area */}
      <main className="flex-1 flex flex-col items-center justify-center bg-gray-100 text-gray-800">
        <div className="text-center">
          <img
            src="/static/whatsapp-web-illustration.png"
            alt="WhatsApp Web Illustration"
            className="w-1/3 mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold mb-2">WhatsApp Web</h1>
          <p className="text-gray-600">
            Send and receive messages without keeping your phone online. Use
            WhatsApp on up to 4 linked devices and 1 phone at the same time.
          </p>
        </div>
      </main>
    </div>
  );
}
