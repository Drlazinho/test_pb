import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface PaginationProps {
  count?: number;
  handleChangePage: (event: React.ChangeEvent<unknown>, value: number) => void; 
}

export default function PaginationRounded({ count = 1, handleChangePage } : PaginationProps) {
  return (
    <Stack spacing={2}>
      <Pagination count={count} variant="outlined" shape="rounded" onChange={handleChangePage} siblingCount={0} />
    </Stack>
  );
}