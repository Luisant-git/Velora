import { Fragment } from "react";
import {
  Box,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

interface ItemSkeletonProps {
  columns: string[];
  rowCount?: number;
  actionsCount?: number;
  hasButton?: boolean;
}

const ItemSkeleton = ({
  columns,
  rowCount = 7,
  actionsCount = 2,
}: ItemSkeletonProps) => {
  const skeletonRows = Array(rowCount).fill(0);

  return (
    <Fragment>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  sx={{
                    backgroundColor: "#6975F8",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  key={column}
                >
                  <Skeleton variant="text" width="100%" height={20} />
                </TableCell>
              ))}
              {actionsCount > 0 && (
                <TableCell
                  sx={{
                    backgroundColor: "#6975F8",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  <Skeleton variant="text" width="60%" height={20} />
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {skeletonRows.map((_, index) => (
              <TableRow key={index}>
                {columns.map((column) => (
                  <TableCell
                    key={`${column}-${index}`}
                    sx={{
                      padding: "8px",
                      height: "40px",
                    }}
                  >
                    <Skeleton variant="text" />
                  </TableCell>
                ))}
                {actionsCount > 0 && (
                  <TableCell
                    sx={{
                      padding: "8px",
                      height: "40px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {Array(actionsCount)
                        .fill(0)
                        .map((_, i) => (
                          <Skeleton
                            key={i}
                            variant="circular"
                            width={30}
                            height={30}
                          />
                        ))}
                    </Box>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination skeleton - optional based on needs */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Skeleton variant="rounded" width={150} height={30} />
      </Box>
    </Fragment>
  );
};

export default ItemSkeleton;
