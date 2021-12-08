import { useForm } from "react-hook-form";

type AccountFormValues = {
	name: string;
	email: string;
};

export default function Account() {
	const { register, handleSubmit } = useForm<AccountFormValues>();

	function handleAccountSubmit(data: AccountFormValues) {
		console.log(data);
	}

	return (
		<>
			<h1>My account</h1>
			<form onSubmit={handleSubmit((data) => handleAccountSubmit(data))}>
				<section>
					<label>
						Name{" "}
						<input
							type="text"
							{...(register("name"), { required: true })}
						/>
					</label>
				</section>

				<section>
					<label>
						Email{" "}
						<input
							type="email"
							{...(register("email"), { required: true })}
						/>
					</label>
				</section>

				<button>Log in</button>
			</form>
		</>
	);
}
