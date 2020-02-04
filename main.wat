(module
  (type $t0 (func (param i32) (result i32)))
  (func $factorial (export "factorial") (type $t0) (param $p0 i32) (result i32)
    get_local $p0
    i32.const 1
    i32.lt_u
    if $I0 (result i32)
      i32.const 1
    else
      get_local $p0
      i32.const 1
      i32.sub
      call $factorial
      get_local $p0
      i32.mul
    end)
  (memory $memory (export "memory") 0))
