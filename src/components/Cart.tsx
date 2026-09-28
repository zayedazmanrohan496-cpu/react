import type { ITechnologies } from '../types';

interface ICartProps {
    cart: ITechnologies[];
    onRemove: (id: string | number) => void;
    onClearAll: () => void;
}

const Cart = ({ cart, onRemove, onClearAll }: ICartProps) => {
    const itemCount = cart.length;

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 w-full max-w-md">

            <div className="mb-4">
                <h2 className="text-xl font-bold text-gray-900">
                    Your Stack
                </h2>

                <p className="text-sm text-gray-400 mt-0.5">
                    {itemCount === 0
                        ? "No technologies selected yet."
                        : `${itemCount} Technology Selected`}
                </p>
            </div>

            {itemCount > 0 ? (
                <div className="space-y-3">

                    <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">

                        {cart.map((technology) => (
                            <div
                                key={technology.id}
                                className="bg-white border border-gray-200 rounded-xl p-3.5 flex items-center justify-between shadow-xs hover:border-gray-300 transition-all"
                            >

                                <div className="flex items-center gap-3">

                                    <img
                                        src={technology.icon}
                                        alt={technology.name}
                                        className="w-8 h-8 object-contain"
                                    />

                                    <div>
                                        <h3 className="font-semibold text-gray-900 text-sm">
                                            {technology.name}
                                        </h3>

                                        <p className="text-xs text-gray-400">
                                            {technology.category}
                                        </p>
                                    </div>

                                </div>

                                <button
                                    onClick={() => onRemove(technology.id)}
                                    className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                                    aria-label="Remove technology"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>

                            </div>
                        ))}

                    </div>

                    <div className="pt-2">

                        <button
                            onClick={onClearAll}
                            className="w-full py-2.5 px-4 border border-rose-200 text-rose-500 font-medium text-sm rounded-xl hover:bg-rose-50 transition-colors"
                        >
                            Remove All
                        </button>

                    </div>

                </div>
            ) : (
                <div className="border border-dashed border-gray-200 rounded-2xl py-10 px-4 text-center">

                    <p className="text-sm text-gray-400">
                        Your stack is empty.
                    </p>

                </div>
            )}

        </div>
    );
};

export default Cart;