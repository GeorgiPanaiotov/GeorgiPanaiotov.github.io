import {
	AppBar,
	Typography,
	Container,
	Toolbar,
	MenuItem,
	Box,
	PaletteMode,
	Switch
} from '@mui/material';
import { pages } from '../utils/commonConsts';
import { useState } from 'react';

type HeaderPropsType = {
	changeTheme: (mode: PaletteMode) => void;
}

const Header = ({ changeTheme }: HeaderPropsType) => {
	const [switchToggle, setSwitchToggle] = useState<boolean>(false);

	return (
		<AppBar position='static'>
			<Container>
				<Toolbar disableGutters>
					<Typography
						variant="h5"
						noWrap
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'cursive',
							fontWeight: 700,
							letterSpacing: '.1rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						Georgi Panayotov
					</Typography>
					<Box
						sx={{ flexGrow: 1, display: { xs: 'flex', justifyContent: 'end' } }}
					>
						{pages.map((page) => (
							<MenuItem key={page} sx={{
								mr: 1.5,
							}}
							>
								<Typography textAlign="center">{page}</Typography>
							</MenuItem>
						))}
						<MenuItem>
							<Switch
								onClick={() => {
									changeTheme(switchToggle ? 'light' : 'dark');
									setSwitchToggle(!switchToggle);
								}}
							/>
						</MenuItem>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Header;