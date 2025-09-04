import React, { Fragment, useState, useEffect, useRef } from 'react';
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  Column,
  HeaderGroup,
  CellProps,
  TableInstance,
  UsePaginationInstanceProps,
  UsePaginationState,
  UseGlobalFiltersInstanceProps,
  UseGlobalFiltersState,
} from 'react-table';
import SpkButton from '../reusable-uielements/spk-button';
import { GlobalFilter } from '../../components/common/data/tables/datatablesdata';

interface EditableCellProps {
  value: any;
  rowIndex: number;
  columnId: string;
  updateMyData: (rowIndex: number, columnId: string, value: any) => void;
}

// EditableCell component for editing table cells
const EditableCell: React.FC<EditableCellProps> = ({
  value: initialValue,
  rowIndex,
  columnId,
  updateMyData,
}) => {
  const [value, setValue] = useState(initialValue);
  const [isEditing, setIsEditing] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const onBlur = () => {
    setIsEditing(false);
    updateMyData(rowIndex, columnId, value);
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return isEditing ? (
    <input value={value} onChange={onChange} onBlur={onBlur} autoFocus />
  ) : (
    <div onClick={() => setIsEditing(true)}>{value}</div>
  );
};

interface SpkdatatableProps<T extends object> {
  COLUMNS: Column<T>[];
  DATATABLE: T[];
  editable?: boolean;
  resetData?: () => void; // resetData function prop
}

const Spkdatatable = <T extends object>({
  COLUMNS,
  DATATABLE,
  editable = false,
}: SpkdatatableProps<T>) => {
  const [data, setData] = useState(DATATABLE);
  const originalDataRef = useRef(DATATABLE);

  const updateMyData = (rowIndex: number, columnId: string, value: any) => {
    setData((oldData) =>
      oldData.map((row, index) => (index === rowIndex ? { ...row, [columnId]: value } : row))
    );
  };

  const editableCellRenderer = ({
    value,
    row,
    column,
  }: CellProps<T>): React.ReactNode => (
    <EditableCell
      value={value}
      rowIndex={row.index}
      columnId={column.id as string}
      updateMyData={updateMyData}
    />
  );

  const defaultColumn = editable ? { Cell: editableCellRenderer } : {};

  const tableInstance = useTable<T>(
    {
      columns: COLUMNS,
      data,
      defaultColumn,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  ) as TableInstance<T> &
    UsePaginationInstanceProps<T> &
    UseGlobalFiltersInstanceProps<T> & {
      state: UsePaginationState<T> & UseGlobalFiltersState<T>;
    };

  const {
    getTableProps,
    headerGroups,
    getTableBodyProps,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
    setGlobalFilter,
  } = tableInstance;

  const handleResetData = () => {
    setData(originalDataRef.current);
  };

  return (
    <Fragment>
      {editable && (
        <SpkButton onClickfunc={handleResetData} Customclass="mb-2">
          Reset Data
        </SpkButton>
      )}

      <div className="d-flex mb-4 flex-wrap">
        <select
          className="mb-4 selectpage border me-1"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((size) => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </div>

      <div className="table-responsive">
        <table {...getTableProps()} className="table table-hover mb-0 table-bordered">
          <thead>
            {headerGroups.map((headerGroup: HeaderGroup<T>) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={Math.random()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(
                      (column as any).getSortByToggleProps ? (column as any).getSortByToggleProps() : {}
                    )}
                    key={column.id}
                  >
                    {column.render('Header')}
                    <span>
                      {(column as any).isSorted
                        ? (column as any).isSortedDesc
                          ? <i className="fa fa-angle-down"></i>
                          : <i className="fa fa-angle-up"></i>
                        : ''}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.length === 0 ? (
              <tr>
                <td colSpan={COLUMNS.length} className="text-center">
                  No results found for "{globalFilter}"
                </td>
              </tr>
            ) : (
              page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} key={Math.random()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()} key={Math.random()}>
                        {cell.render('Cell')}
                      </td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      <div className="block sm:flex mt-4 ">
        <span className="">
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span className="sm:ms-auto ">
          <SpkButton 
            Customclass="btn-outline-light tablebutton me-2 sm:inline block my-1"
            onClickfunc={() => gotoPage(0)}
            Disabled={!canPreviousPage}
          >
            {' Previous '}
          </SpkButton>
          <SpkButton
            Customclass="btn-outline-light tablebutton me-2 my-1"
            onClickfunc={() => previousPage()}
            Disabled={!canPreviousPage}
          >
            {' << '}
          </SpkButton>
          <SpkButton
            Customclass="btn-outline-light tablebutton me-2 my-1"
            onClickfunc={() => previousPage()}
            Disabled={!canPreviousPage}
          >
            {' < '}
          </SpkButton>
          <SpkButton
            Customclass="btn-outline-light tablebutton me-2 my-1"
            onClickfunc={() => nextPage()}
            Disabled={!canNextPage}
          >
            {' > '}
          </SpkButton>
          <SpkButton
            Customclass="btn-outline-light tablebutton me-2 my-1"
            onClickfunc={() => nextPage()}
            Disabled={!canNextPage}
          >
            {' >> '}
          </SpkButton>
          <SpkButton
            Customclass="btn-outline-light tablebutton me-2 sm:inline block my-1"
            onClickfunc={() => gotoPage(pageCount - 1)}
            Disabled={!canNextPage}
          >
            {' Next '}
          </SpkButton>
        </span>
      </div>
    </Fragment>
  );
};

export default Spkdatatable;
