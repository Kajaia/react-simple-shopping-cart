import Swal from 'sweetalert2';

function toast(icon, title) {
	const Toast = Swal.mixin({
		toast: true,
		position: 'bottom',
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: true,
		didOpen: toast => {
			toast.addEventListener('mouseenter', Swal.stopTimer);
			toast.addEventListener('mouseleave', Swal.resumeTimer);
		},
	});

	Toast.fire({
		icon: icon,
		title: title,
	});
}

export default toast;
