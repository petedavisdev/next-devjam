import { useForm } from "react-hook-form";
import { supabase, supabaseLogin } from "../supabase";

type AccountFormValues = {
	email: string;
};

export default function Account() {
	const { register, handleSubmit } = useForm<AccountFormValues>();

	function handleLogin({ email }: AccountFormValues) {
		supabaseLogin(email);
	}

	return (
		<main>
			<h1>My account</h1>
			<form onSubmit={handleSubmit(handleLogin)}>
				<section>
					<label>
						Email{" "}
						<input type="email" {...register("email")} required />
					</label>
				</section>

				<button>Log in</button>
			</form>
		</main>
	);
}
