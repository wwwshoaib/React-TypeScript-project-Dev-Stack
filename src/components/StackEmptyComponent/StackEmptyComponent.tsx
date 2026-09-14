


const StackEmptyComponent = () => {
    return (
        <div className="w-full max-w-[282px] rounded-[18px] border border-gray-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-bold text-[#111827]">
                Your Stack
            </h2>

            <p className="mt-1 text-xs text-[#94a3b8]">
                No technologies selected yet.
            </p>

            <div className="mt-4 flex min-h-[68px] items-center justify-center rounded-xl border border-dashed border-[#dbe3ee] px-4">
                <p className="text-xs text-[#94a3b8]">
                    Your stack is empty.
                </p>
            </div>
        </div>
    );
};

export default StackEmptyComponent;