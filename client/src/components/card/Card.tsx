import { useState } from "react";

export const Card = () => {
	//eslint-disable-next-line
	const [file, setFile] = useState<File | null>(null);
	return (
		<div className="w-80  bg-white mx-0 h-96 rounded-sm text-center flex flex-col py-5 gap-4 text-slate-700 items-center justify-center">
			<p className="text-xl ">Upload your image</p>
			<p>File should be Jpeg, Png,...</p>
			<div className=" mx-0 h-44 border px-16 border-dashed border-slate-800">
				{" "}
			</div>
			<button className="border border-sky-600 bg-sky-600 px-4 text-white rounded-md">
				Choose a file
			</button>
		</div>
	);
};
